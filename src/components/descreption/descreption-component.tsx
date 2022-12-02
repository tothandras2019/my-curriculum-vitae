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
      <Letters smaller={hideDescreption} />
      {/* <SectionButton value={hideDescreption ? 'show details' : 'hide details'} onHandler={onHandleShowDescription} /> */}
      <div className={`descreption ${hideDescreption ? 'hide' : 'show'}`}>
        <p>{descreption}.</p>
        <a href='/contact'>contact me</a>
      </div>
    </div>
  )
}
