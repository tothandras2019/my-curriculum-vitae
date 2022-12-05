import './main-full-component.css'
import { CerfiticationsArrType, cvWorkingHistoryArrType, cvSkillsArrType } from './../../DATA/data-types'
import { Skills } from '../skills/skills-component'
import { Contact } from '../contact/contact-component'
import { DetailsSection } from '../details-section/details-section-component'

type MainPropsType = {
  workingdetail?: cvWorkingHistoryArrType | null
  certifications?: CerfiticationsArrType | null
  skills?: cvSkillsArrType | null
  elementObject?: any
  backgroundColor?: string | null
  contact?: boolean | null
  section: number
}

export const MainFullPage = ({
  contact,
  elementObject,
  workingdetail,
  certifications,
  skills,
  backgroundColor = 'secondary',
  section,
}: MainPropsType): JSX.Element => {
  return (
    <main className={`main-full ${backgroundColor}`} id={`section-${section}`}>
      {certifications && <DetailsSection dataArr={certifications} title={'Certifications'} />}
      {workingdetail && <DetailsSection dataArr={workingdetail} title={'Works'} />}
      {skills && <Skills skills={skills} />}
      {contact && <Contact />}
    </main>
  )
}
