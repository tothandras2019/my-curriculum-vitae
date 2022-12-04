import './link-button-component.css'
import { ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationLinkContext } from '../../contexts/navigation-context'

export const LinkButton = ({
  isHidden,
  iconMaterial,
  link,
  item,
}: {
  isHidden: boolean
  iconMaterial: () => JSX.Element
  link: string
  item: string
}): JSX.Element => {
  const navigationTo = useNavigate()
  const { setNavLinkItems } = useContext(NavigationLinkContext)

  const onHandleNavigateTo = () => {
    navigationTo(`${link}`)
    setNavLinkItems(link)
  }
  return (
    <button className={isHidden ? 'hide' : '_'} onClick={onHandleNavigateTo}>
      <span className='material-icons'>{iconMaterial()}</span>
      <span className={'letter'}>{item}</span>
    </button>
  )
}
