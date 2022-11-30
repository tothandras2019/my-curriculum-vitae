import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import './Reset.css'
import { Naviation } from './components/navigation/navigation-component'
import { MainSplited } from './components/main-splited/main-splited-component'
import CV_DATA from './DATA/cv-data.json'
import { SinglePageAllComponent } from './components/single-page/single-page-component'
import { MainFullPage } from './components/main-full/main-full-component'
import { CerfiticationsArrType, cvSkillsArrType, cvWorkingHistoryArrType } from './DATA/data-types'
import { Skills } from './components/skills/skills-component'
import { ScrollButton } from './components/buttons/scroll-button/scroll-button-component'
import { Article } from './components/article/article-component'

/*components: 
About me {Personal, Carrier-objectives}, 
Certified {cerfitications}, 
Previous woerking life { working-history},
My Skills {skills} 
Good to know{studies,other}
Contact me*/

function App(): JSX.Element {
  const location: string[] = ['certification', 'works', 'skills']

  type CvObjectType = {
    certification: CerfiticationsArrType[]
    works: cvWorkingHistoryArrType[]
    skills: cvSkillsArrType[]
  }

  const locationObjectElements = {
    certification: 'certifications',
    works: 'works',
    skills: 'skills',
  }

  const cv_descreption: string = CV_DATA.carrier_objectives.descreption
  const cv_certifications: CerfiticationsArrType = CV_DATA.cerfitications
  const cv_workings: cvWorkingHistoryArrType = CV_DATA.works
  const cv_skills: cvSkillsArrType = CV_DATA.skills

  const [descreption, setDescreption] = useState('')
  const [allDetails, setAllDetails] = useState<string[]>([])

  const [certifications, setCertifications] = useState<CerfiticationsArrType | null>([])
  const [workingdetail, setWorkingDetail] = useState<cvWorkingHistoryArrType | null>([])
  const [skills, setSkills] = useState<cvSkillsArrType>([])
  type updateState = Dispatch<SetStateAction<CvObjectType>>
  const [locationObjectElementsState, setLocationObjectElementsState] = useState<updateState>((locationObjectElementsState) => ({
    certification: [],
    works: [],
    skills: [],
  }))

  useEffect(() => {
    setDescreption(cv_descreption)
    return () => {}
  }, [descreption])
  useEffect(() => {
    setCertifications(cv_certifications)
    return () => {}
  }, [cv_certifications])

  useEffect(() => {
    setWorkingDetail(cv_workings)

    return () => {}
  }, [cv_workings])
  useEffect(() => {
    setSkills(cv_skills)

    return () => {}
  }, [cv_skills])

  useEffect(() => {
    if (certifications !== null) setLocationObjectElementsState(() => ({ ...locationObjectElementsState, certification: certifications }))
    setLocationObjectElementsState(() => ({ ...locationObjectElementsState, works: workingdetail }))
    setLocationObjectElementsState(() => ({ ...locationObjectElementsState, skills: skills }))
    return () => {}
  }, [certifications, workingdetail, skills])

  useEffect(() => {}, [locationObjectElementsState])
  useEffect(() => {
    console.log(window.location.pathname)
  }, [])

  return (
    <div className='App'>
      {/* <Article /> */}
      <Routes>
        <Route element={<Naviation />}>
          <Route
            index
            path='/'
            element={
              <SinglePageAllComponent skills={skills} workingdetail={workingdetail} descreption={descreption} certifications={certifications} />
            }
          />
          <Route path='/certifications' element={<MainFullPage certifications={certifications} backgroundColor={'secondary'} section={1} />} />
          <Route path='/works' element={<MainFullPage workingdetail={workingdetail} backgroundColor={'secondary'} section={2} />} />
          <Route path='/skills' element={<MainFullPage skills={skills} backgroundColor={'secondary'} section={3} />} />
          <Route path='/contact' element={<MainFullPage contact={true} backgroundColor={'secondary'} section={4} />} />
        </Route>
      </Routes>
      <ScrollButton />
    </div>
  )
}

export default App
