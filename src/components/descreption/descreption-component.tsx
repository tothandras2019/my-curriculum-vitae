import { useEffect, useState } from 'react'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { Letters } from '../react-letters/react-letters-componets'
import './descreption-component.css'
export const Descreption = ({ descreption }: { descreption: string }): JSX.Element => {
  const [welcomeState, setWelcomeState] = useState<string>()
  const [hideDescreption, setHideDescreption] = useState(false)

  const onHandleShowDescription = (): void => {
    setHideDescreption(!hideDescreption)
  }

  return (
    <div className='descreption-container'>
      <SectionButton onHandler={onHandleShowDescription} />
      <Letters smaller={hideDescreption} />
      <p className={`descreption ${hideDescreption ? 'show' : 'hide'}`}>{descreption}</p>
      <a href=''>lets talk!</a>
    </div>
  )
}
