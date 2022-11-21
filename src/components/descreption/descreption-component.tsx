import { Letters } from '../react-letters/react-letters-componets'
import './descreption-component.css'
export const Descreption = ({ welcome = 'Welcome', descreption }: { welcome?: string; descreption: string }): JSX.Element => {
  const titleElement = welcome.split('')
  return (
    <div className='descreption-container'>
      <Letters splitedWord={titleElement} />
      <p>{descreption}</p>
      <a href=''>lets talk!</a>
    </div>
  )
}
