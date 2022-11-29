import { Letters } from '../react-letters/react-letters-componets'
import './contact-component.css'
import { Form } from './form/form.component'

export const Contact = (): JSX.Element => {
  return (
    <section className='contact-container'>
      <Letters sentence='Contact me' smaller={true} />
      <p className='comitment-message'>
        I feel passion at frontend development and I like to work with experienced people. I currious at you and and your team too! Feel free to
        contact with me.
      </p>
      <Form />
    </section>
  )
}
