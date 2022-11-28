import { useState, useContext } from 'react'
import './open-button-component.css'
import { HideMenuContext } from '../../contexts/navigation-hide-context'

export const OpenButton = ({ setDirection }: { setDirection: string }): JSX.Element => {
  const { isHidden } = useContext(HideMenuContext)

  const [isRight, setIsRight] = useState('left')
  return <span className='open-button material-icons'>{isHidden.hide ? 'chevron_right' : 'chevron_left'}</span>
}
