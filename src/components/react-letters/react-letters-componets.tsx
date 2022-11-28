import { spawn } from 'child_process'
import { MouseEvent, MouseEventHandler, useState, useEffect } from 'react'
import './react-letters-components.css'

type WordElementType = { [key: string]: boolean }
export const Letters = ({
  isColor = false,
  sentence,
  smaller = false,
}: {
  isColor?: boolean
  sentence: string[][]
  smaller: boolean
}): JSX.Element => {
  const [startAnim, setStartAnim] = useState<WordElementType>({} as WordElementType)
  const [isSmallTitle, setIsSmallTitle] = useState(true)
  const prevLength: number = 0

  useEffect(() => {
    let wordsId: WordElementType = {}
    sentence.forEach((_, i) => (wordsId[`wo-${i}`] = false))
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
    <span className={`title ${smaller ? 'smaller' : 'larger'}`}>
      {sentence.map((words, i) => {
        return (
          <div key={`words-${i}`} className='word-container'>
            {words.map((word, j) => (
              <span key={`word-${i}${j}`} className={`parent-span`} onMouseEnter={handleOnMouseEnter}>
                <p id={`wo-${i}${j}`} className={`${startAnim[`wo-${i}${j}`] ? 'letter-bounces' : ''}`}>
                  {word}
                </p>
              </span>
            ))}
          </div>
        )
      })}
    </span>
  )
}
// style={{ left: `${length * 100}px` }}
