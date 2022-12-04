import './details-section-component.css'
import { ReactElement, SyntheticEvent, useEffect, useRef, useState, useContext } from 'react'
import { CerfiticationsArrType, CvCertificationDetailsType, cvWorkingHistory, cvWorkingHistoryArrType } from '../../DATA/data-types'
import { SectionButton } from '../buttons/section-button/section-button-component'
import { Letters } from '../react-letters/react-letters-componets'
import { useIntersectionObserver } from '../contexts/custom-hooks/observer-hook'
import { AppearContext } from './../contexts/appear-section-context'

type DetailsType = cvWorkingHistoryArrType | CerfiticationsArrType

export const DetailsSection = ({ dataArr, title }: { dataArr: DetailsType | null | undefined; title: string }): ReactElement => {
  const [showDetails, setShowDetails] = useState(false)
  const [detailsArray, setDetailsArray] = useState<boolean[]>([])
  const { willAppear, setWillIsAppear } = useContext(AppearContext)

  const setObserverState = useIntersectionObserver()
  const certificationContainer = useRef<HTMLDivElement>(null)

  const tresholds = {
    observeEntryTreshold: 0.2,
    observeLeaveTreshold: 0.2,
  }

  useEffect(() => {
    setObserverState({ element: certificationContainer.current, callback: intersectionCallback })
    dataArr?.forEach((_, i) => {
      setDetailsArray((prev) => [...prev, true])
    })
  }, [])

  const intersectionCallback = (entries: any, observer: any) => {
    const [entriesPoperties] = entries
    if (entriesPoperties.intersectionRatio >= tresholds.observeEntryTreshold) {
      setShowDetails(true)
      // setWillIsAppear(() => ({ isAppear: true }))
      return
    }
    setShowDetails(false)
    //setWillIsAppear(() => ({ isAppear: false }))
  }

  return (
    <section ref={certificationContainer}>
      {showDetails && (
        <>
          <Letters sentence={title} smaller={true} />
          {dataArr?.map((data: cvWorkingHistory & CvCertificationDetailsType, i: number) => {
            const { date, certification_title, place, document, details, position, enterprice, role_descreption } = data
            return (
              <div key={`cert-${i}`} className={`certification-container ${i % 2 === 0 ? 'even' : 'odd'}`}>
                <p>{date}</p>
                <div className='details-container'>
                  <h2>{position || certification_title}</h2>
                  <h3>{enterprice || place}</h3>
                  <ul id={`details-list-${i}`} className={detailsArray[i] ? 'show' : ''}>
                    <h4>{position || certification_title}</h4>
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
        </>
      )}
    </section>
  )
}
