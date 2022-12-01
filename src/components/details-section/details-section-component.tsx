import './details-section-component.css'
import { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { CerfiticationsArrType, CvCertificationDetailsType, cvWorkingHistory, cvWorkingHistoryArrType } from '../../DATA/data-types'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { Letters } from '../react-letters/react-letters-componets'

type DetailsType = cvWorkingHistoryArrType | CerfiticationsArrType

export const DetailsSection = ({ dataArr, title }: { dataArr: DetailsType | null | undefined; title: string }): ReactElement => {
  const [showDetails, setShowDetails] = useState(true)
  const [detailsArray, setDetailsArray] = useState<boolean[]>([])

  const onHandleHide_Description = (e: SyntheticEvent) => {}

  useEffect(() => {
    dataArr?.forEach((_, i) => {
      setDetailsArray((prev) => [...prev, true])
    })
  }, [])

  return (
    <section>
      <Letters sentence={title} smaller={true} />
      {dataArr?.map((data: cvWorkingHistory & CvCertificationDetailsType, i: number) => {
        const { date, certification_title, place, document, details, position, enterprice, role_descreption } = data
        return (
          <div key={`cert-${i}`} className={`certification-container ${i % 2 === 0 ? 'even' : 'odd'}`}>
            <p>{date}</p>
            <div className='details-container'>
              <h2>{position || certification_title}</h2>
              <h3>{enterprice || place}</h3>
              {/* <SectionButton onHandler={onHandleHide_Description} /> */}
              <ul id={`details-list-${i}`} className={detailsArray[i] ? 'show' : ''}>
                {role_descreption?.split('.').map((sentence, i) => (
                  <li key={`details-${i}`}>{sentence}</li>
                ))}
                {details?.split('.').map((sentence, i) => (
                  <li key={`details-${i}`}>{sentence}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </section>
  )
}
