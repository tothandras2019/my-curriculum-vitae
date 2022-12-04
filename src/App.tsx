import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Reset.css'
import { Naviation } from './components/navigation/navigation-component'
import CV_DATA from './DATA/cv-data.json'
import { SinglePageAllComponent } from './components/single-page/single-page-component'
import { MainFullPage } from './components/main-full/main-full-component'
import { CerfiticationsArrType, cvSkillsArrType, cvWorkingHistoryArrType } from './DATA/data-types'
import { ScrollButton } from './components/buttons/scroll-button/scroll-button-component'
import { Background } from './components/background/background-component'
import { NavigationLinkContext } from './components/contexts/navigation-context'

function App(): JSX.Element {
  const location: string[] = ['certifications', 'works', 'skills', 'contact']
  const [certificationsStr, worksStr, skillsStr, contactStr] = location
  //
  const { navLinkItems } = useContext(NavigationLinkContext)

  const cv_descreption: string = CV_DATA.carrier_objectives.descreption
  const cv_certifications: CerfiticationsArrType = CV_DATA.cerfitications
  const cv_workings: cvWorkingHistoryArrType = CV_DATA.works
  const cv_skills: cvSkillsArrType = CV_DATA.skills

  const [descreption, setDescreption] = useState('')

  const [certifications, setCertifications] = useState<CerfiticationsArrType | null>([])
  const [workingdetail, setWorkingDetail] = useState<cvWorkingHistoryArrType | null>([])
  const [skills, setSkills] = useState<cvSkillsArrType>([])

  useEffect(() => {
    setDescreption(cv_descreption)
    return () => {}
  }, [cv_descreption])
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

  // useEffect(() => {
  //   if (certifications !== null) setLocationObjectElementsState(() => ({ ...locationObjectElementsState, certification: certifications }))
  //   setLocationObjectElementsState(() => ({ ...locationObjectElementsState, works: workingdetail }))
  //   setLocationObjectElementsState(() => ({ ...locationObjectElementsState, skills: skills }))
  //   return () => {}
  // }, [certifications, workingdetail, skills])

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
          <Route
            path={`/${certificationsStr}`}
            element={<MainFullPage certifications={certifications} backgroundColor={'secondary'} section={1} />}
          />
          <Route path={`/${worksStr}`} element={<MainFullPage workingdetail={workingdetail} backgroundColor={'secondary'} section={2} />} />
          <Route path={`/${skillsStr}`} element={<MainFullPage skills={skills} backgroundColor={'secondary'} section={3} />} />
          <Route path={`/${contactStr}`} element={<MainFullPage contact={true} backgroundColor={'secondary'} section={4} />} />
        </Route>
      </Routes>
      {!location.includes(navLinkItems) && <ScrollButton />}
      <Background clsName='horizontal' />
      <Background clsName='vertical' />
    </div>
  )
}

export default App
