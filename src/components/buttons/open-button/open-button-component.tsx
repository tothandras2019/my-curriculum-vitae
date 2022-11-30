import { useState, useContext } from 'react'
import './open-button-component.css'
import { HideMenuContext } from '../../contexts/navigation-hide-context'
import { arrowLeft, arrowRight } from '../../../icons/account-icon'

export const OpenButton = ({ setDirection }: { setDirection: string }): JSX.Element => {
  const { isHidden } = useContext(HideMenuContext)

  const [isRight, setIsRight] = useState('left')
  return <span className='open-button material-icons'>{isHidden.hide ? arrowRight() : arrowLeft()}</span>
}
