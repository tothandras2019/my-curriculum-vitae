import { SyntheticEvent } from 'react'
import './section-button-component.css'
export const SectionButton = ({
  isDisabled,
  type = 'button',
  value = 'hide',
  onHandler,
}: {
  isDisabled: boolean
  type?: string
  value?: string
  onHandler: (T: SyntheticEvent) => void
}): JSX.Element => {
  return <input className={isDisabled ? 'disabled' : ''} disabled={isDisabled} type={type} value={value} onClick={onHandler} />
}
