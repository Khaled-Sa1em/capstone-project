import { useState } from 'react'
export default function useHovered() {
  const [isHovered, setIsHovered] = useState(false)

  function handleHover(id) {
    setIsHovered((prev) => !prev)
  }

  return [isHovered, handleHover]
}
