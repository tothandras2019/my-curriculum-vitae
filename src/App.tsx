import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './Reset.css'
import { Naviation } from './components/navigation/navigation-component'
import { MainSplited } from './components/main-splited/main-splited-component'
import CV_DATA from './DATA/cv-data.json'

/*components: 
About me {Personal, Carrier-objectives}, 
Certified {cerfitications}, 
Previous woerking life { working-history},
My Skills {skills} 
Good to know{studies,other}
Contact me*/

function App(): JSX.Element {
  const cv_descreption: string = CV_DATA.carrier_bjectives.descreption
  const [descreption, setDescreption] = useState('')
  useEffect(() => {
    setDescreption(cv_descreption)
    return () => {}
  }, [descreption])

  return (
    <div className='App'>
      <Naviation />
      <MainSplited descreption={descreption} />
    </div>
  )
}

export default App
