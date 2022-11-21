import { Fragment } from 'react'
import { CerfiticationsArrType, cvWorkingHistoryArrType as CV_WorkingHistoryArrType } from '../../DATA/data-types'
import { MainFullPage } from '../main-full/main-full-component'
import { MainSplited } from '../main-splited/main-splited-component'

export const SinglePageAllComponent = ({
  descreption,
  certifications,
  workingdetail,
}: {
  descreption: string
  certifications: CerfiticationsArrType | null
  workingdetail: CV_WorkingHistoryArrType | null
}): JSX.Element => {
  return (
    <Fragment>
      <MainSplited descreption={descreption} />
      <MainFullPage workingdetail={null} certifications={certifications} />
      <MainFullPage workingdetail={workingdetail} certifications={null} />
    </Fragment>
  )
}
