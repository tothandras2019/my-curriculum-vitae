import { useEffect, useState } from 'react'

export type InitStateType = { element: HTMLDivElement | null; callback: (entries: any, observer: any) => void }

export const useIntersectionObserver = () => {
  const [state, setState] = useState<InitStateType>({
    element: null,
    callback: (entries: any, observer: any) => {},
  })
  const tresholds = {
    observeEntryTreshold: 0.2,
    observeLeaveTreshold: 0.2,
  }
  const [options, setOption] = useState({ threshold: tresholds.observeEntryTreshold, root: null, rootMargin: '0%' })

  useEffect(() => {
    const { element, callback } = state
    if (!element) return
    const observer = new IntersectionObserver(callback, options)
    observer.observe(element)
    return () => {
      observer.unobserve(element)
    }
  }, [state, options])

  return [state, setState] as const
}
