import { useEffect, useState } from 'react'
import { Attention } from '../attention/attention-component'
import { LinkButton } from '../buttons/link-button/link-button-component'
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
      <Attention message='*Hover on title letters' />
      <div className={`descreption ${hideDescreption ? 'hide' : 'show'}`}>
        <p>{descreption}.</p>
        <LinkButton link={'contact'} item={'contact me'} isHidden={false} iconMaterial={() => <p></p>} />
      </div>
    </div>
  )
}
