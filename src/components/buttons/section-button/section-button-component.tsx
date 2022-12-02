import { SyntheticEvent } from 'react'
import './section-button-component.css'
export const SectionButton = ({
  type = 'button',
  value = 'hide',
  onHandler,
}: {
  type?: string
  value?: string
  onHandler: (T: SyntheticEvent) => void
}): JSX.Element => {
  return <input type={type} value={value} onClick={onHandler} />
}
