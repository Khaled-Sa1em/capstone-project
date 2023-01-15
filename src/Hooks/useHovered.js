import { useState, useEffect, useRef } from 'react'
export default function useHovered() {
  const [isHovered, setIsHovered] = useState(false)

  const ref = useRef(null)

  // function handleHover(id) {
  //   setIsHovered((prev) => !prev)
  // }
  function enter() {
    setIsHovered(true)
  }
  function leave() {
    setIsHovered(false)
  }

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)


    return () => {
      console.log(ref.current)
      ref.current?.removeEventListener('mouseenter', enter)
      ref.current?.removeEventListener('mouseleave', leave)
    }
  }, [])

  return [isHovered, ref]
}
