"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Testimonial, TestimonialFormData } from "@/lib/types";
import TestimonialForm from "./TestimonialForm";

// Utility to provide a skeleton card while loading or no testimonials
function TestimonialSkeleton() {
  return (
    <article
      className={cn(
        "relative group h-full rounded-2xl border bg-white p-6 shadow-sm animate-pulse flex flex-col justify-between"
      )}
    >
      <div className="absolute top-4 left-4 w-8 h-8 bg-[#007B78]/10 rounded-full" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
        <div>
          <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const total = useMemo(() => testimonials.length, [testimonials]);

  // Improved fetch function using AbortController for better cleanup and prevent memory leaks
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch("/api/testimonials", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        setTestimonials(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          // Only log real errors
          console.error("Error fetching testimonials:", error);
        }
        setTestimonials([]);
      })
      .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);

  // Keep track of selected slide, robust to API changing unexpectedly
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap?.() ?? 0);
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Enhanced: Only autoplay if more than 1 testimonial and window active
  useEffect(() => {
    if (!api || testimonials.length <= 1) return;

    let isPaused = false;
    const handleVisibility = () => {
      isPaused = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const intervalId = setInterval(() => {
      if (!api || isPaused) return;
      const lastIdx = total - 1;
      const curr = api.selectedScrollSnap();
      const next = curr >= lastIdx ? 0 : curr + 1;
      api.scrollTo(next);
    }, 5400); // slightly longer for improved readability

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [api, total, testimonials.length]);

  // Handle testimonial form submission with optimistic UI
  const handleTestimonialSubmit = useCallback(
    async (data: TestimonialFormData) => {
      // Create optimistic test data with a temporary id
      const tempId = `temp-${Date.now()}`;
      const optimistic: Testimonial = {
        id: tempId,
        content: data.content,
        author: data.author || "Anonymous",
        role: data.role || "",
        imageSrc: data.imageSrc || "",
        email: null,
        userId: null,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
        approved: false
      };
      setTestimonials((prev) => [optimistic, ...prev]);
      try {
        const response = await fetch("/api/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          // Replace testimonials with confirmed data
          const updatedData = await response.json();
          setTestimonials(Array.isArray(updatedData) ? updatedData : []);
        } else {
          throw new Error("Failed to submit testimonial");
        }
      } catch (err) {
        // Remove the optimistic testimonial in case of failure
        setTestimonials((prev) => prev.filter((t) => t.id !== tempId));
        alert(
          "There was an error submitting your testimonial. Please try again later."
        );
      }
    },
    []
  );

  // Accessibility: For carousel dots, improve focus state, aria attributes.
  function CarouselDots() {
    return (
      <div className="mt-6 flex items-center justify-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === current}
            disabled={i === current}
            onClick={() => api?.scrollTo(i)}
            tabIndex={0}
            className={cn(
              "h-2 w-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#007B78]",
              i === current
                ? "bg-[#007B78]"
                : "bg-gray-300 hover:bg-[#007B78]/40"
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="bg-gray-50/70 py-5">
      <div className="max-w-5xl mx-auto px-4">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#007B78] tracking-tight mb-1">Kind Words from People</h2>
            <p className="text-gray-600">
              What mentors and collaborators say about working with me.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <TestimonialForm onTestimonialSubmit={handleTestimonialSubmit} />
          </div>
        </header>
        <div>
          {isLoading ? (
            // Skeleton state
            <div className="w-full flex flex-col items-center">
              {[0, 1].map((v) => (
                <div className="w-full md:w-1/2 px-2" key={v}>
                  <TestimonialSkeleton />
                </div>
              ))}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-14">
              <p className="text-gray-500 mb-4 text-lg font-medium">No testimonials yet.</p>
              <TestimonialForm onTestimonialSubmit={handleTestimonialSubmit} />
            </div>
          ) : (
            <div className="relative">
              <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {testimonials.map((t, idx) => (
                    <CarouselItem
                      key={t.id ?? idx}
                      className="md:basis-1/2 lg:basis-1/2"
                    >
                      <article
                        className={cn(
                          "relative flex flex-col group h-full rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300",
                          "hover:shadow-xl hover:-translate-y-1 hover:border-[#007B78]/40 hover:bg-[#f7fdfa]"
                        )}
                        tabIndex={0}
                        aria-label={`Testimonial by ${t.author || "Anonymous"}`}
                      >
                        <Quote className="absolute top-4 left-4 text-[#007B78]/10 scale-150 pointer-events-none select-none" />
                        <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                          {t.content}
                        </p>
                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                          <img
                            src={
                              typeof t.imageSrc === "string" && t.imageSrc.trim()
                                ? t.imageSrc
                                : "/placeholder-user.jpg"
                            }
                            alt={t.author || "Testimonial author"}
                            className="w-12 h-12 rounded-full object-cover border bg-gray-100"
                            loading="lazy"
                          />
                          <div className="ml-4 min-w-0">
                            <p className="font-semibold text-black truncate">
                              {t.author || "Anonymous"}
                            </p>
                            {t.role ? (
                              <p className="text-sm text-gray-500 truncate">{t.role}</p>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className={cn(
                    "hidden md:flex",
                    testimonials.length <= 1 && "pointer-events-none opacity-50"
                  )}
                  aria-label="Previous testimonials"
                />
                <CarouselNext
                  className={cn(
                    "hidden md:flex",
                    testimonials.length <= 1 && "pointer-events-none opacity-50"
                  )}
                  aria-label="Next testimonials"
                />
              </Carousel>
              <CarouselDots />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}