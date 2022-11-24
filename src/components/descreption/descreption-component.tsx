import { useEffect, useState } from 'react'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { Letters } from '../react-letters/react-letters-componets'
import './descreption-component.css'
export const Descreption = ({ welcome = 'Hi. I am András!', descreption }: { welcome?: string; descreption: string }): JSX.Element => {
  const [welcomeState, setWelcomeState] = useState<string[]>([])
  const [hideDescreption, setHideDescreption] = useState(false)

  useEffect(() => {
    const wordArr = welcome.split(' ')
    const letterArr = wordArr
      .map((word) => word.split(''))
      .join(' ')
      .replaceAll(',', '')
      .split('')

    setWelcomeState(letterArr)
    return () => {}
  }, [welcome])

  const onHandleShowDescription = (): void => {
    setHideDescreption(!hideDescreption)
  }

  return (
    <div className='descreption-container'>
      <SectionButton onHandleShowDescription={onHandleShowDescription} />
      <Letters splitedWord={welcomeState} />
      <p className={`descreption ${hideDescreption ? 'show' : ''}`}>{descreption}</p>
      <a href=''>lets talk!</a>
    </div>
  )
}
