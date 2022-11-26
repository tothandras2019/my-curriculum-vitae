import './article-component.css'
import { useRef, useEffect, MutableRefObject } from 'react'
type MoveAxisType = { x: number; y: number }
type RefObjectType = HTMLDivElement | Element
export const Article = ({ moveAxisValue }: { moveAxisValue: MoveAxisType }): JSX.Element => {
  const { x, y } = moveAxisValue
  const rotationElement = useRef<HTMLDivElement | null>(null)

  return (
    <div className='article-container'>
      <div ref={rotationElement} className='roation-container'>
        <div className='front'>
          <div className='rotate_child rotate-child_1'>
            <p>VS code</p>
            <p>MUI</p>
          </div>
          <div className='rotate_child rotate-child_2'>
            <p>React js</p>
            <p>Express js</p>
          </div>
          <div className='rotate_child rotate-child_3'>
            <p>SASS</p>
            <p>Tailwind</p>
          </div>
          <div className='rotate_child rotate-child_4'>
            <p>Git </p>
            <p>Typesctript</p>
          </div>
          <div className='rotate_child rotate-child_5'>
            <p>HTML</p>
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </div>
  )
}
