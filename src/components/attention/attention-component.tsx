import './attention-component.css'

export const Attention = ({ message }: { message: string }): JSX.Element => {
  return <p className='attention-message'>{message}</p>
}
