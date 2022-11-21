import { spawn } from 'child_process'
import { MouseEvent, MouseEventHandler, useState } from 'react'
import './react-letters-components.css'

export const Letters = ({ isColor = false, splitedWord }: { isColor?: boolean; splitedWord: string[] }): JSX.Element => {
  const [startAnim, setStartAnim] = useState<boolean[]>([])

  const handleOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    setStartAnim([])
  }
  return (
    <span className='title'>
      {splitedWord.map((letter, i) => (
        <span key={`letter-${i}`} id={`letter-${i}`} className={`parent-span ${startAnim ? 'start' : ''}`} onMouseEnter={handleOnMouseEnter}>
          <p>{letter}</p>
        </span>
      ))}
    </span>
  )
}
//<span className={`type-${isColor}`}>{letter}</span>;
