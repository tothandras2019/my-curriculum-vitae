import './link-button-component.css'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export const LinkButton = ({
  isHidden,
  iconMaterial,
  link,
  item,
}: {
  isHidden: boolean
  iconMaterial: string
  link: string
  item: string
}): JSX.Element => {
  const navigationTo = useNavigate()
  const onHandleNavigateTo = () => {
    navigationTo(`${link}`)
  }
  return (
    <button className={isHidden ? 'hide' : ''} onClick={onHandleNavigateTo}>
      <span className='material-icons'>{iconMaterial}</span>
      <span className={'letter'}>{item}</span>
    </button>
  )
}
