import './open-navigation-component.css'
import { useContext } from 'react'
import { OpenButton } from '../../buttons/open-button/open-button-component'
import { HideMenuContext } from '../../contexts/navigation-hide-context'

export const Open = (): JSX.Element => {
  const { setIsHidden } = useContext(HideMenuContext)

  const handleOnHideMenu = (): void => {
    setIsHidden((prev) => ({ hide: !prev.hide }))
  }
  return (
    <div className='side-open-menu' onClick={handleOnHideMenu}>
      <OpenButton setDirection='left' />
    </div>
  )
}
