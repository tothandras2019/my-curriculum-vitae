import './details-section-component.css'
import { Fragment, MouseEventHandler, ReactElement, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { CerfiticationsArrType, CvCertificationDetailsType, cvWorkingHistory, cvWorkingHistoryArrType } from '../../DATA/data-types'
import { Letters } from '../react-letters/react-letters-componets'
import { useIntersectionObserver } from '../contexts/custom-hooks/observer-hook'
import { Attention } from '../attention/attention-component'

type DetailsType = cvWorkingHistoryArrType | CerfiticationsArrType

export const DetailsSection = ({ dataArr, title }: { dataArr: DetailsType | null | undefined; title: string }): ReactElement => {
  const [showDetails, setShowDetails] = useState(false)
  const [detailsArray, setDetailsArray] = useState<boolean[]>([])

  const [observerState, setObserverState] = useIntersectionObserver()
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
  }, [dataArr])

  const intersectionCallback = (entries: any, observer: any) => {
    const [entriesPoperties] = entries
    if (entriesPoperties.intersectionRatio >= tresholds.observeEntryTreshold) {
      setShowDetails(true)
      return
    }
    setShowDetails(false)
  }

  const handleMouseEnter = (event: SyntheticEvent<HTMLDivElement>) => {
    const index = (event.target as HTMLDivElement).dataset.certId
    if (index) setDetailsArray((prev) => [...prev.map((el, i) => (i === parseInt(index) ? (el = false) : el))])
  }

  const handleMouseLeave = () => setDetailsArray((prev) => [...prev.map((el, i) => (el = true))])

  return (
    <section ref={certificationContainer}>
      {showDetails && (
        <Fragment>
          <Letters sentence={title} smaller={true} />
          <Attention message='*Hover on paragraphs for more details' />
          <div className='descreptions-section'>
            <div className='certification-section'>
              {dataArr?.map((data: cvWorkingHistory & CvCertificationDetailsType, i: number) => {
                const { date, certification_title, place, details, position, enterprice, role_descreption } = data
                return (
                  <div
                    key={`cert-${i}`}
                    className={`certification-container ${i % 2 === 0 ? 'even' : 'odd'}`}
                    data-cert-id={i}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ animationDelay: `${i / 10}s` }}
                  >
                    <p data-cert-id={i}>{date}</p>
                    <div data-cert-id={i} className='details-container'>
                      <h2 data-cert-id={i}>{position || certification_title}</h2>
                      <h3 data-cert-id={i}>{enterprice || place}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='details-list-section'>
              {dataArr?.map((data: cvWorkingHistory & CvCertificationDetailsType, i: number) => {
                const { certification_title, details, position, role_descreption } = data
                return (
                  <div key={`details-list-${i}`} id={`details-list-${i}`} className={`cert-list ${detailsArray[i] ? '' : 'highlights'}`}>
                    <h4>{position || certification_title}</h4>
                    {role_descreption?.split('.').map((sentence, i) => (
                      <p key={`details-${i}`}>{sentence}</p>
                    ))}
                    {details?.split('.').map((sentence, i) => (
                      <p key={`details-${i}`}>{sentence}</p>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </Fragment>
      )}
    </section>
  )
}
