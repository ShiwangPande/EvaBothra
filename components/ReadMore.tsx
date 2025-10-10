import { useState } from "react"

export function ReadMore({ text, maxLength = 250 }: { text: string; maxLength?: number }) {
  const [expanded, setExpanded] = useState(false)

  if (text.length <= maxLength) return <p className="text-gray-700">{text}</p>

  return (
    <div>
      <p className="text-gray-700">
        {expanded ? text : text.slice(0, maxLength) + "..."}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-600 font-semibold hover:text-blue-800"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  )
}
