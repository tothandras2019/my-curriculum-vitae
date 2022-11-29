import './word-container-component.css'
import { MouseEvent } from 'react'

type WordElementType = { [key: string]: boolean }

export const Words = ({
  words,
  index,
  translateObject,
  startAnim,
  handler,
}: {
  words: string[]
  index: number
  translateObject: { left: string }
  startAnim: WordElementType
  handler: (event: MouseEvent<HTMLElement>) => void
}) => {
  return (
    <div key={`words-${index}`} className='word-container' style={translateObject}>
      {words.map((word, j) => {
        const anim_AnimationDelay = { animationDelay: `0.${j + index}s` }

        return (
          <span key={`word-${index}${j}`} className={`parent-span`} onMouseEnter={handler} style={anim_AnimationDelay}>
            <p id={`wo-${index}${j}`} className={`${startAnim[`wo-${index}${j}`] ? 'letter-bounces' : ''}`}>
              {word}
            </p>
          </span>
        )
      })}
    </div>
  )
}
