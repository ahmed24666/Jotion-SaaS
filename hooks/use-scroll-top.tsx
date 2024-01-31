import React, { useEffect, useState } from 'react'

export const useScrollTop = (threhold = 10) => {
    const [scrolled, setscrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threhold) {
                setscrolled(true)
            }else{
                setscrolled(false)
            }
        }
      window.addEventListener('scroll',handleScroll)
      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    }, [threhold])
    
  return scrolled
}
