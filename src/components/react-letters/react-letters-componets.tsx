import { spawn } from 'child_process'
import { MouseEvent, MouseEventHandler, useState, useEffect, useContext } from 'react'
import { AppearContext } from './../contexts/appear-section-context'
import './react-letters-components.css'
import { Words } from './words-container/words-container-component'

type WordElementType = { [key: string]: boolean }
export const Letters = ({
  isColor = false,
  sentence = 'Hello. My name is András',
  smaller = false,
}: {
  isColor?: boolean
  sentence?: string
  smaller: boolean
}): JSX.Element => {
  const [startAnim, setStartAnim] = useState<WordElementType>({} as WordElementType)
  const [isSmallTitle, setIsSmallTitle] = useState(true)
  const [sentenceMod, setSentenceMod] = useState<string[][]>([])
  const { willAppear } = useContext(AppearContext)

  useEffect(() => {
    let wordsId: WordElementType = {}
    const wordArr = sentence.split('')

    const splitedSentence = wordArr.map((word) => word.split(''))
    setSentenceMod(splitedSentence)
    setStartAnim(wordsId)

    return () => {
      setStartAnim({})
    }
  }, [sentence])

  useEffect(() => {
    let wordsId: WordElementType = {}
    sentenceMod.forEach((_, i) => (wordsId[`wo-${i}`] = false))
  }, [sentenceMod])

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
        return <Words key={`words-${i}-all`} words={words} index={i} startAnim={startAnim} handler={handleOnMouseEnter} />
      })}
    </span>
  )
}
