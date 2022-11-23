import React, { useEffect, useState } from 'react'
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

/*components: 
About me {Personal, Carrier-objectives}, 
Certified {cerfitications}, 
Previous woerking life { working-history},
My Skills {skills} 
Good to know{studies,other}
Contact me*/

function App(): JSX.Element {
  const cv_descreption: string = CV_DATA.carrier_bjectives.descreption
  const cv_certifications: CerfiticationsArrType = CV_DATA.cerfitications
  const cv_workings: cvWorkingHistoryArrType = CV_DATA.working_history
  const cv_skills: cvSkillsArrType = CV_DATA.skills

  const [descreption, setDescreption] = useState('')
  const [certifications, setCertifications] = useState<CerfiticationsArrType | null>([])
  const [allDetails, setAllDetails] = useState<string[]>([])
  const [workingdetail, setWorkingDetail] = useState<cvWorkingHistoryArrType | null>([])
  const [skills, setSkills] = useState<cvSkillsArrType>([])

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

  return (
    <div className='App'>
      <Routes>
        <Route element={<Naviation />}>
          <Route
            index
            path='/'
            element={
              <SinglePageAllComponent skills={skills} workingdetail={workingdetail} descreption={descreption} certifications={certifications} />
            }
          />
          <Route path='/certification' element={<MainFullPage certifications={certifications} backgroundColor={null} />} />
          <Route path='/works' element={<MainFullPage workingdetail={workingdetail} backgroundColor={null} />} />
          <Route path='/skills' element={<MainFullPage skills={skills} backgroundColor={null} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
