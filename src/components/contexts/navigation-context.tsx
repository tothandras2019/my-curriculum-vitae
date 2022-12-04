import { createContext, useState, Dispatch, SetStateAction } from 'react'
import { about, certificationIcon, skillIcon, contactMeIcon, workIcon } from './../../icons/account-icon'

//type
type NavitemsType = {
  [key: string]: [string, () => JSX.Element]
}

type AllNavItems = {
  [key: string]: [string, () => JSX.Element]
}

//initial value
export const NavigationItems: NavitemsType[] = [
  { about: ['About me', about] },
  { certifications: ['Certifications', certificationIcon] },
  { works: ['Works', workIcon] },
  { skills: ['My skills', skillIcon] },
  { contact: ['Contact me', contactMeIcon] },
]

//update-Dispatch-defaultUpdate-SetStateAction
type updateType = Dispatch<SetStateAction<typeof NavigationItems>>
const updateNavigationItems: updateType = () => NavigationItems

//context
export const NavigationContext = createContext({ navItems: NavigationItems, setNavItems: updateNavigationItems })

//Provider

export const NavigationContextProvider = ({ children }: { children: any }) => {
  const [navItems, setNavItems] = useState(NavigationItems)

  return <NavigationContext.Provider value={{ navItems, setNavItems }}>{children}</NavigationContext.Provider>
}
//------------------;
export const NavigateTo: string = '/'

type updateNavigateLinkType = Dispatch<SetStateAction<typeof NavigateTo>>
const updateNavigationLink: updateNavigateLinkType = () => NavigateTo
export const NavigationLinkContext = createContext({ navLinkItems: NavigateTo, setNavLinkItems: updateNavigationLink })
export const NavigationLinkContextProvider = ({ children }: { children: any }) => {
  const [navLinkItems, setNavLinkItems] = useState(NavigateTo)

  return <NavigationLinkContext.Provider value={{ navLinkItems, setNavLinkItems }}>{children}</NavigationLinkContext.Provider>
}
