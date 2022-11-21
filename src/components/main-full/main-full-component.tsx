import './main-full-component.css'
import { Fragment } from 'react'
import { CerfiticationsArrType, cvWorkingHistoryArrType, cvWorkingHistory } from './../../DATA/data-types'
export const MainFullPage = ({
  workingdetail,
  certifications,
}: {
  workingdetail?: cvWorkingHistoryArrType | null
  certifications?: CerfiticationsArrType | null
}): JSX.Element => {
  return (
    <main className='main-full'>
      {certifications
        ? certifications?.map(({ date, certification_title, place, document, details }, i) => (
            <div key={`cert-${i}`} className='certification-container'>
              <h3>{date}</h3>
              <div className='details-container'>
                <h2>{certification_title}</h2>
                <h3>{place}</h3>
                <ul>
                  {details?.split('.').map((sentence, i) => (
                    <li key={`details-${i}`}>{sentence}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        : workingdetail?.map(({ date, position, enterprice, role_descreption }, i) => (
            <WorkingDetails date={date} position={position} enterprice={enterprice} role_descreption={role_descreption} index={i} />
          ))}
    </main>
  )
}

const WorkingDetails = ({ date, position, enterprice, role_descreption, index }: cvWorkingHistory & { index: number }) => {
  return (
    <div key={`cert-${index}`} className='certification-container'>
      <h3>{date}</h3>
      <div className='details-container'>
        <h2>{position}</h2>
        <h3>{enterprice}</h3>
        <ul>
          {role_descreption?.split('.').map((sentence, i) => (
            <li key={`details-${i}`}>{sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const CertificationDetails = () => {}
