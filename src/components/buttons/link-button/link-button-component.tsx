import './link-button-component.css'
import { ReactNode } from 'react'

export const LinkButton = ({ item }: { item: string }): JSX.Element => {
  return <button>{item}</button>
}
