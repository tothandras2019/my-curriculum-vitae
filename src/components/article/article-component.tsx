import './article-component.css'
import { useRef, useEffect, MutableRefObject, useState } from 'react'
type MoveAxisType = { x: number; y: number }
type RefObjectType = HTMLDivElement | Element
export const Article = ({ moveAxisValue }: { moveAxisValue?: MoveAxisType }): JSX.Element => {
  const rotationElement = useRef<HTMLDivElement | null>(null)
  const [shereHtmlElements, setShereHtmlElements] = useState<JSX.Element[] | null>([])
  const skillsContainerArray = ['VS code', 'Javascript', 'CSS', 'HTML', 'React.js', 'Typescript', 'GitHub', 'Material UI', 'Tailwind', 'Express.js']

  useEffect(() => {
    // sphereRotation()
    return () => {}
  }, [])

  const sphereRotation = () => {
    const length = skillsContainerArray.length
    const r = 200
    const dist = 0
    const sphereElements = skillsContainerArray.map((elem, i) => {
      const deltaAngle = (i / length) * Math.PI
      const thetaAngle = i / length

      const x = r * Math.cos(deltaAngle) * Math.sin(thetaAngle) + dist
      const y = r * Math.cos(deltaAngle) * Math.sin(thetaAngle) + dist
      const z = r * Math.sin(thetaAngle)
      console.log(x, y, z)
      return (
        <div key={`skill-elem-${i}`} className='skill-element' style={{ transform: `perspective(1000px) translate3d(${x}px, ${y}px, ${z}px)` }}>
          {elem}
        </div>
      )
    })

    setShereHtmlElements(sphereElements)
  }

  return (
    <div className='article-container'>
      <div ref={rotationElement} className='roation-container'>
        <div className='front'>{shereHtmlElements}</div>
      </div>
      {/* <div ref={rotationElement} className='roation-container'>
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
      </div> */}
    </div>
  )
}
