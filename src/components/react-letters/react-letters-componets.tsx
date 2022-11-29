import { spawn } from 'child_process'
import { MouseEvent, MouseEventHandler, useState, useEffect } from 'react'
import './react-letters-components.css'
import { Words } from './words-container/words-container-component'

type WordElementType = { [key: string]: boolean }
export const Letters = ({
  isColor = false,
  sentence = 'My name is András',
  smaller = false,
}: {
  isColor?: boolean
  sentence?: string
  smaller: boolean
}): JSX.Element => {
  const [startAnim, setStartAnim] = useState<WordElementType>({} as WordElementType)
  const [isSmallTitle, setIsSmallTitle] = useState(true)
  const [sentenceMod, setSentenceMod] = useState<string[][]>([])
  const [wordDistance, setWordDistance] = useState<number>(0)
  let prevLength = 0
  const constansDistance = 278

  useEffect(() => {
    let wordsId: WordElementType = {}
    const wordArr = sentence.split(' ')
    setWordDistance(wordArr.length / sentence.length)
    const splitedSentence = wordArr.map((word) => word.split(''))

    setSentenceMod(splitedSentence)

    sentenceMod.forEach((_, i) => (wordsId[`wo-${i}`] = false))
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
    <span className={`title ${smaller ? 'smaller' : ''}`}>
      {sentenceMod.map((words, i) => {
        const transLeft = { left: `${prevLength * wordDistance * constansDistance}px` }
        prevLength += words.length
        return <Words key={`words-${i}-all`} words={words} index={i} translateObject={transLeft} startAnim={startAnim} handler={handleOnMouseEnter} />
      })}
    </span>
  )
}
