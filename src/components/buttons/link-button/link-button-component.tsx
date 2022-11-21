import './link-button-component.css'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export const LinkButton = ({ link, item }: { link: string; item: string }): JSX.Element => {
  const navigationTo = useNavigate()
  return (
    <button
      onClick={() => {
        navigationTo(`/${link}`)
      }}
    >
      {item}
    </button>
  )
}
