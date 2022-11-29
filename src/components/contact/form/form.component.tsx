import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { SectionButton } from '../../buttons/section-button/section-button-component'
import './form-component.css'

type DataType = {
  name: string
  email: string
  subject: string
  message: string
}

const PUBLIC_EMAIL_SEND_KEY: string = 'hpfIW4g7kw_NujnB4'
const TEMPLATE_ID: string = 'template_8wb894c'
const SERVICE_ID: string = 'service_0877m2q'

export const Form = (): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [data, setData] = useState({} as DataType)

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldValue = event.target.value
    setName(fieldValue)
  }
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldValue = event.target.value
    setEmail(fieldValue)
  }
  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldValue = event.target.value
    setSubject(fieldValue)
  }
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const fieldValue = event.target.value
    setMessage(fieldValue)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    sendFormEmail({ name: name, email: email, subject: subject, message: message })
  }

  const sendFormEmail = async (data: DataType) => {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_EMAIL_SEND_KEY).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
      },
      (err) => {
        console.log('FAILED...', err)
      },
    )
  }

  return (
    <div className='from-container'>
      <form action=''>
        <div className='contact-email'>
          <input type='text' placeholder='Name' onChange={handleNameChange} />
          <input type='email' placeholder='Email' onChange={handleEmailChange} />
        </div>
        <input type='text' placeholder='Subject' onChange={handleSubjectChange} />
        <textarea placeholder='Message' onChange={handleMessageChange} />
        <SectionButton type='submit' value={'Send'} onHandler={handleSubmit} />
      </form>
    </div>
  )
}
