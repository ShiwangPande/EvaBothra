"use client"
import React, { useState } from 'react';
import { ExternalLink, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SchoolCaptainPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760199846/bc506ff4-4eca-4924-b895-12c7390e13bd.png",
    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760200002/0001_qlizk1.jpg",
    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760200023/5f54a791-9e5c-48e6-a452-ab9e8da5d096.png",
    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760200036/96404130-8cb0-4315-93df-22e31b35e248.png"
  ];

  const achievements = [
    "2,400 students led",
    "TEDx curation",
    "Finance club oversight",
    "56 juniors mentored"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="text-sm text-gray-500 mb-3 tracking-wide">Grade 12</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Jayshree Periwal International School
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">School Captain</h2>
          
          {/* Links */}
          <div className="flex gap-6 items-center flex-wrap mb-8">
            <a
              href="https://jpischool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-all"
            >
              <ExternalLink className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-all" />
              <span className="border-b border-gray-300 group-hover:border-gray-900 transition-all">
                jpischool.com
              </span>
            </a>
            <a
              href="https://www.instagram.com/jpischool/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-all"
            >
              <Instagram className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-all" />
              <span className="border-b border-gray-300 group-hover:border-gray-900 transition-all">
                @jpischool
              </span>
            </a>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            As School Captain of 2,400 students, I led assemblies, managed school-wide events, 
            and balanced dual responsibilities in both academic and hostel leadership.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-14">
          <div className="relative bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video relative bg-gray-100">
              <img
                src={images[currentImage]}
                alt={`School Captain moment ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImage ? 'bg-white w-8' : 'bg-white/60 w-2'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-gray-700 text-center font-medium text-base">{achievement}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Journey</h3>
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>
                My tenure included curating speakers for TEDx JPIS, overseeing the school's Finance Club 
                and Editorial Board, and designing a summer council program on finance and entrepreneurship 
                for 56 juniors. But the real work of leadership often began after hours — in hostel corridors, 
                during late-night conversations with homesick juniors, or in quiet corners, where they helped 
                outline essays and plan extracurricular projects.
              </p>
              <p>
                I spent evenings mentoring students on everything from MUN speeches to balancing academics 
                with self-care. Over time, I realized that the most meaningful influence isn't in giving 
                directions, but in listening — helping others find their own footing rather than walking 
                them through it.
              </p>
              <p className="font-medium text-gray-900 pt-2">
                Leadership, I learned, isn't about being in charge; it's about being someone others trust 
                when things feel uncertain. Authority isn't earned through a badge, but through consistency, 
                empathy, and showing up even when no one's watching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}