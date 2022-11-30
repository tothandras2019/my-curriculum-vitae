import { createContext, useState, Dispatch, SetStateAction } from 'react'
import { about, certificationIcon, skillIcon, contactMeIcon, workIcon } from './../../icons/account-icon'

//type
type NavitemsType = {
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

export const NavigateTo: string = '/'

//update-Dispatch-defaultUpdate-SetStateAction
type updateType = Dispatch<SetStateAction<typeof NavigationItems>>
const updateNavigationItems: updateType = () => NavigationItems

type updateNavigateLinkType = Dispatch<SetStateAction<typeof NavigateTo>>
const updateNavigationLink: updateNavigateLinkType = () => NavigateTo

//context
export const NavigationContext = createContext({ navItems: NavigationItems, setNavItems: updateNavigationItems })

//Provider
export const NavigationContextProvider = ({ children }: { children: any }) => {
  const [navItems, setNavItems] = useState(NavigationItems)
  return <NavigationContext.Provider value={{ navItems, setNavItems }}>{children}</NavigationContext.Provider>
}
//------------------;
