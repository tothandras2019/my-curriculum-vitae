import './main-full-component.css'
import { Fragment, useState, useContext } from 'react'
import {
  CerfiticationsArrType,
  CvCertificationDetailsType,
  cvWorkingHistoryArrType,
  cvWorkingHistory,
  cvSkillsArrType,
} from './../../DATA/data-types'
import { BackgroundContext } from './../contexts/theme-context'
import { Skills } from '../skills/skills-component'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { ScrollButton } from '../buttons/scroll-button/scroll-button-component'

type MainPropsType = {
  workingdetail?: cvWorkingHistoryArrType | null
  certifications?: CerfiticationsArrType | null
  skills?: cvSkillsArrType | null
  elementObject?: any
  backgroundColor: string | null
}

export const MainFullPage = ({ elementObject, workingdetail, certifications, skills, backgroundColor = 'primary' }: MainPropsType): JSX.Element => {
  // console.log(elementObject)

  const { backgroundItem } = useContext(BackgroundContext)

  return (
    <main className={`main-full ${backgroundColor}`}>
      {certifications?.map(({ date, certification_title, place, document, details }, i) => (
        <CertificationDetails
          key={`certification-${i}`}
          date={date}
          certification_title={certification_title}
          place={place}
          document={document}
          details={details}
          index={i}
        />
      ))}
      {workingdetail?.map(({ date, position, enterprice, role_descreption }, i) => (
        <WorkingDetails
          key={`workingdetails-${i}`}
          date={date}
          position={position}
          enterprice={enterprice}
          role_descreption={role_descreption}
          index={i}
        />
      ))}
      {skills && <Skills skills={skills} />}
    </main>
  )
}

const WorkingDetails = ({ date, position, enterprice, role_descreption, index }: cvWorkingHistory & { index: number }) => {
  const [showDetails, setShowDetails] = useState(false)

  const onHandleShowDescription = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div key={`cert-${index}`} className={`certification-container`}>
      <h4>{date}</h4>
      <div className='details-container'>
        <h2>{position}</h2>
        <h3>{enterprice}</h3>
        <SectionButton onHandleShowDescription={onHandleShowDescription} />

        <ul className={showDetails ? 'show' : ''}>
          {role_descreption?.split('.').map((sentence, i) => (
            <li key={`details-${i}`}>{sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const CertificationDetails = ({ date, certification_title, place, document, details, index }: CvCertificationDetailsType & { index: number }) => {
  const [showDetails, setShowDetails] = useState(false)

  const onHandleShowDescription = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div key={`cert-${index}`} className={`certification-container`}>
      <h4>{date}</h4>
      <div className='details-container'>
        <h2>{certification_title}</h2>
        <h3>{place}</h3>
        <SectionButton onHandleShowDescription={onHandleShowDescription} />

        <ul className={showDetails ? 'show' : ''}>
          {details?.split('.').map((sentence, i) => (
            <li key={`details-${i}`}>{sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
