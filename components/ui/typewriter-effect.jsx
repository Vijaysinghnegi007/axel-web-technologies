"use client"
import { useEffect, useState } from "react"

const TypewriterEffect = ({ words = [], speed = 100, pause = 1500 }) => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (index >= words.length) return

    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
      setText(words[index].substring(0, subIndex))
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  return (
    <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary h-10">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  )
}

export default TypewriterEffect
