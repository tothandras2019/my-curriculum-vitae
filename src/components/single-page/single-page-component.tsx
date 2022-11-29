import { Fragment, useState } from 'react'
import { CerfiticationsArrType, ColorObjectType, cvSkillsArrType, cvWorkingHistoryArrType as CV_WorkingHistoryArrType } from '../../DATA/data-types'
import { MainFullPage } from '../main-full/main-full-component'
import { MainSplited } from '../main-splited/main-splited-component'

export const SinglePageAllComponent = ({
  skills,
  descreption,
  certifications,
  workingdetail,
}: {
  skills: cvSkillsArrType
  descreption: string
  certifications: CerfiticationsArrType | null
  workingdetail: CV_WorkingHistoryArrType | null
}): JSX.Element => {
  const [background, setBackground] = useState<ColorObjectType>({ primary: 'primary', secondary: 'secondary' })

  return (
    <Fragment>
      <MainSplited descreption={descreption} backgroundColor={background.secondary} />
      <MainFullPage certifications={certifications} backgroundColor={background.secondary} />
      <MainFullPage workingdetail={workingdetail} backgroundColor={background.secondary} />
      <MainFullPage skills={skills} backgroundColor={background.secondary} />
      <MainFullPage contact={true} backgroundColor={background.secondary} />
    </Fragment>
  )
}
