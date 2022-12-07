import { GeneralObjectType, CarrierObjectivesType, CerfiticationsArrType, cvWorkingHistoryArrType, cvSkillsArrType } from './../../DATA/data-types'
import { useContext, useState, Dispatch, createContext, SetStateAction, useEffect } from 'react'
import DATA from './../../DATA/cv-data.json'

export const Location: string[] = ['certifications', 'works', 'skills', 'contact']

type CV_DATAType = {
  cv_descreption: CarrierObjectivesType
  cv_certifications: CerfiticationsArrType
  cv_workings: cvWorkingHistoryArrType
  cv_skills: cvSkillsArrType
}
const InitCV_DATA: CV_DATAType = {
  cv_descreption: {},
  cv_certifications: [],
  cv_workings: [],
  cv_skills: [],
}

type udateType = Dispatch<SetStateAction<CV_DATAType>>

const updateData: udateType = () => InitCV_DATA

export const DataContext = createContext({ data: InitCV_DATA, setData: updateData })

export const DataContextProvider = ({ children }: { children: any }): JSX.Element => {
  const [data, setData] = useState(InitCV_DATA)

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      cv_descreption: DATA.carrier_objectives,
      cv_certifications: DATA.cerfitications,
      cv_workings: DATA.works,
      cv_skills: DATA.skills,
    }))
    return () => {}
  }, [])

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}

export {}
