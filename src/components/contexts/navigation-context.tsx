import { createContext, useState, Dispatch, SetStateAction } from 'react'

//type
type NavitemsType = {
  [key: string]: string[]
}

//initial value
export const NavigationItems: NavitemsType[] = [
  { about: ['About me', 'account_circle'] },
  { certifications: ['Certifications', 'history_edu'] },
  { works: ['Works', 'engineering'] },
  { skills: ['My skills', 'wb_sunny'] },
  { contact: ['Contact me', 'contact_page'] },
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
