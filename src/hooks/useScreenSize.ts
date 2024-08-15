import { useState, useEffect } from "react"

const useScreenSize = (breakpoint: number = 1024) => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth <= breakpoint)
  }, [breakpoint])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [breakpoint])

  return isMobile
}

export default useScreenSize
