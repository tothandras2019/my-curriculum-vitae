import './article-component.css'
import { useRef, useEffect, MutableRefObject, useState } from 'react'
const TagCloud = require('TagCloud')

type MoveAxisType = { x: number; y: number }
type RefObjectType = HTMLDivElement | Element
export const Article = ({ moveAxisValue }: { moveAxisValue?: MoveAxisType }): JSX.Element => {
  const rotationElement = useRef<HTMLDivElement | null>(null)
  const [shereHtmlElements, setShereHtmlElements] = useState<JSX.Element[] | null>([])
  const skillsContainerArray = [
    'VS Code',
    'Javascript',
    'CSS',
    'SASS',
    'HTML',
    'React',
    'Typescript',
    'GitHub',
    'Material UI',
    'Tailwind',
    'Express',
    'Firebase',
    'Netfly',
    'Swiper',
    'REST-API',
  ]

  const tagOptions = {
    radius: 270,
    initSpeed: 'slow',
    // maxSpeed: 'fast',
  }

  useEffect(() => {
    const tagContainer = '.cloud-items'
    const tagcloundInstance = TagCloud(tagContainer, skillsContainerArray, tagOptions)

    return () => {
      tagcloundInstance.destroy()
    }
  }, [])

  return (
    <div className='article-container'>
      <div className='cloud-items'></div>
    </div>
  )
}
