import './main-full-component.css'
import { Fragment, useState, useContext, useEffect } from 'react'
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
import { Contact } from '../contact/contact-component'
import { Letters } from '../react-letters/react-letters-componets'
import { DetailsSection } from '../details-section/details-section-component'
import { Separator } from '../separator/separator-component'

type MainPropsType = {
  workingdetail?: cvWorkingHistoryArrType | null
  certifications?: CerfiticationsArrType | null
  skills?: cvSkillsArrType | null
  elementObject?: any
  backgroundColor?: string | null
  contact?: boolean | null
  section: number
}

enum Title {
  'Certification',
  'Skills',
  'Works',
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
  const { backgroundItem } = useContext(BackgroundContext)
  const [title, setTitle] = useState<string>('')

  return (
    <main className={`main-full ${backgroundColor}`} id={`section-${section}`}>
      <Separator />
      {certifications && <DetailsSection dataArr={certifications} title={'Certifications'} />}
      {workingdetail && <DetailsSection dataArr={workingdetail} title={'Works'} />}
      {skills && <Skills skills={skills} />}
      {contact && <Contact />}
    </main>
  )
}
