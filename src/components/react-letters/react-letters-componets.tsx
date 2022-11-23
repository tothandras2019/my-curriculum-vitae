import { spawn } from 'child_process'
import { MouseEvent, MouseEventHandler, useState, useEffect } from 'react'
import './react-letters-components.css'

type WordElementType = { [key: string]: boolean }
export const Letters = ({ isColor = false, splitedWord }: { isColor?: boolean; splitedWord: string[] }): JSX.Element => {
  const [startAnim, setStartAnim] = useState<WordElementType>({})

  useEffect(() => {
    let wordsId: WordElementType = {}

    splitedWord.forEach((_, i) => (wordsId[`wo-${i}`] = false))
    setStartAnim(wordsId)

    return () => {
      setStartAnim({})
    }
  }, [])

  const handleOnMouseEnter = (event: MouseEvent<HTMLElement>) => {
    const newTarget = event.target as HTMLElement
    const woId = newTarget.id

    setStartAnim((prev) => ({ ...prev, [woId]: true }))
    setTimeout(() => {
      setStartAnim((prev) => ({ ...prev, [woId]: false }))
    }, 700)
  }

  return (
    <span className='title'>
      {splitedWord.map((letter, i) => (
        <span key={`letter-${i}`} className={`parent-span`} onMouseEnter={handleOnMouseEnter}>
          <p id={`wo-${i}`} className={`${startAnim[`wo-${i}`] ? 'letter-bounces' : ''}`}>
            {letter}
          </p>
        </span>
      ))}
    </span>
  )
}
