import { useEffect, useRef, useState } from 'react'

/**
 * Hook that triggers a CSS class when the element scrolls into view.
 * @param {Object} options
 * @param {number} options.threshold - 0-1, how much of the element must be visible (default 0.15)
 * @param {string} options.rootMargin - margin around root (default '0px 0px -60px 0px')
 * @param {boolean} options.once - only trigger once (default true)
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}

/**
 * Hook for animated counter (e.g., "10+" years)
 * @param {number} end - target number
 * @param {number} duration - animation duration in ms
 * @param {boolean} start - whether to start counting
 */
export function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    let rafId = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, start])

  return count
}

/**
 * Hook for parallax scroll effect
 * @param {number} speed - parallax speed multiplier (default 0.3)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId = null
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const scrolled = window.innerHeight - rect.top
        if (scrolled > 0 && rect.top < window.innerHeight) {
          el.style.transform = `translateY(${scrolled * speed * -0.1}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [speed])

  return ref
}
