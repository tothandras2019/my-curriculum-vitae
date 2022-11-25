import { MouseEvent, useState } from 'react'
import { Article } from '../article/article-component'
import { ScrollButton } from '../buttons/scroll-button/scroll-button-component'
import { Descreption } from '../descreption/descreption-component'
import './main-splited-component.css'

export const MainSplited = ({ descreption, backgroundColor }: { descreption: string; backgroundColor: string }): JSX.Element => {
  const [mouseMoveEventValues, setMouseMoveEventValues] = useState({ x: 0, y: 0 })

  const handleMouseHover = (event: MouseEvent<HTMLDivElement>) => {
    const targetPos = event.target
    const moveX: number = event.movementX
    const moveY: number = event.movementY

    setMouseMoveEventValues(() => ({ x: moveX, y: moveY }))
  }
  return (
    <main className={`main-splited ${backgroundColor}`} onMouseMove={handleMouseHover}>
      <Descreption descreption={descreption} />
      <Article moveAxisValue={mouseMoveEventValues} />
    </main>
  )
}
