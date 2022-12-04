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

// <div className='front'>{shereHtmlElements}</div>
//

//   /* <div ref={rotationElement} className='roation-container'>
//   <div className='front'>
//     <div className='rotate_child rotate-child_1'>
//       <p>VS code</p>
//       <p>MUI</p>
//     </div>
//     <div className='rotate_child rotate-child_2'>
//       <p>React js</p>
//       <p>Express js</p>
//     </div>
//     <div className='rotate_child rotate-child_3'>
//       <p>SASS</p>
//       <p>Tailwind</p>
//     </div>
//     <div className='rotate_child rotate-child_4'>
//       <p>Git </p>
//       <p>Typesctript</p>
//     </div>
//     <div className='rotate_child rotate-child_5'>
//       <p>HTML</p>
//       <p>Javascript</p>
//     </div>
//   </div>
// </div> */
// }
