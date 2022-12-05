import { useCallback, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../contexts/custom-hooks/observer-hook'
import { Letters } from '../react-letters/react-letters-componets'
import './contact-component.css'
import { Form } from './form/form.component'

export const Contact = (): JSX.Element => {
  const [startIndicator, setStartIndicator] = useState(false)
  const skillComponentRef = useRef<HTMLDivElement | null>(null)
  const [observerState, setObserverState] = useIntersectionObserver()

  const [tresholds] = useState({
    observeEntryTreshold: 0.2,
    observeLeaveTreshold: 0.2,
  })

  const intersectingCallback = useCallback(
    (entries: any, observer: any) => {
      const observerCallBack = (entries: any, observer: any) => {
        const [entriesPoperties] = entries
        if (entriesPoperties.intersectionRatio >= tresholds.observeEntryTreshold) return setStartIndicator(true)
        setStartIndicator(false)
      }
      observerCallBack(entries, observer)
    },
    [tresholds],
  )

  useEffect(() => {
    if (!skillComponentRef.current) return
    setObserverState({ element: skillComponentRef.current, callback: intersectingCallback })
    return () => {}
  }, [skillComponentRef, intersectingCallback, setObserverState])

  return (
    <section ref={skillComponentRef} className='contact-container'>
      {startIndicator && <Letters sentence='Contact me' smaller={true} />}
      <p className='comitment-message'>
        I feel passion at frontend development and I like to work with experienced people. I currious at you and and your team too! Feel free to
        contact with me.
      </p>
      <Form />
    </section>
  )
}
