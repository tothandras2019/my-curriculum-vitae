import { createContext, useState, Dispatch, SetStateAction } from 'react'

//type
type NavitemsType = {
  [key: string]: string[]
}

//initial value
export const NavigationItems: NavitemsType[] = [
  { about: ['About me', 'account_circle'] },
  { certification: ['Certifications', 'history_edu'] },
  { works: ['Works', 'engineering'] },
  { skills: ['My skills', 'wb_sunny'] },
  { knowme: ['Good to know', 'info'] },
  { contact: ['Contact me', 'contact_page'] },
]

//update-Dispatch-defaultUpdate-SetStateAction
type updateType = Dispatch<SetStateAction<typeof NavigationItems>>
const defaultUpdate: updateType = () => NavigationItems

//context
export const NavigationContext = createContext({ navItems: NavigationItems, setNavItems: defaultUpdate })

//Provider
export const NavigationContextProvider = ({ children }: { children: any }) => {
  const [navItems, setNavItems] = useState(NavigationItems)
  return <NavigationContext.Provider value={{ navItems, setNavItems }}>{children}</NavigationContext.Provider>
}
