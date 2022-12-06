import { useEffect } from 'react'
import './article-component.css'
const TagCloud = require('TagCloud')

export const Article = (): JSX.Element => {
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
    'Netlify',
    'Swiper',
    'REST-API',
  ]

  const tagOptions = {
    radius: 270,
    initSpeed: 'slow',
  }

  useEffect(() => {
    const tagContainer = '.cloud-items'
    const tagcloundInstance = TagCloud(tagContainer, skillsContainerArray, tagOptions)

    return () => {
      tagcloundInstance.destroy()
    }
  })

  return (
    <div className='article-container'>
      <div className='cloud-items'></div>
    </div>
  )
}
