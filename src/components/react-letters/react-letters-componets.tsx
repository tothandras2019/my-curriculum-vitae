import { spawn } from 'child_process'
import './react-letters-components.css'

export const Letters = ({ isColor = false, splitedWord }: { isColor?: boolean; splitedWord: string[] }): JSX.Element => {
  return (
    <span className='title'>
      {splitedWord.map((letter) => (
        <span>{letter}</span>
      ))}
    </span>
  )
}
//<span className={`type-${isColor}`}>{letter}</span>;
