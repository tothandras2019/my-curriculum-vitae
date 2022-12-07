import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { NavigationContextProvider, NavigationLinkContextProvider } from './components/contexts/navigation-context'
import { BackgroundContextProvider } from './components/contexts/theme-context'
import { HideMenuContextProvider } from './components/contexts/navigation-hide-context'
import { AppearContextProvider } from './components/contexts/appear-section-context'

import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './components/contexts/data-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <BackgroundContextProvider>
      <HideMenuContextProvider>
        <DataContextProvider>
          <NavigationLinkContextProvider>
            <NavigationContextProvider>
              <AppearContextProvider>
                <App />
              </AppearContextProvider>
            </NavigationContextProvider>
          </NavigationLinkContextProvider>
        </DataContextProvider>
      </HideMenuContextProvider>
    </BackgroundContextProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
