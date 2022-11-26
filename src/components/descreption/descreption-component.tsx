import { useEffect, useState } from 'react'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { Letters } from '../react-letters/react-letters-componets'
import './descreption-component.css'
export const Descreption = ({ welcome = 'Hi. I`am András!', descreption }: { welcome?: string; descreption: string }): JSX.Element => {
  const [welcomeState, setWelcomeState] = useState<string[][]>([])
  const [hideDescreption, setHideDescreption] = useState(false)

  useEffect(() => {
    const wordArr = welcome.split(' ')
    const sentence = wordArr.map((word) => word.split(''))
    setWelcomeState(sentence)
    return () => {}
  }, [welcome])

  const onHandleShowDescription = (): void => {
    setHideDescreption(!hideDescreption)
  }

  return (
    <div className='descreption-container'>
      <SectionButton onHandleShowDescription={onHandleShowDescription} />
      <Letters sentence={welcomeState} smaller={hideDescreption} />
      <p className={`descreption ${hideDescreption ? 'show' : ''}`}>{descreption}</p>
      <a href=''>lets talk!</a>
    </div>
  )
}
