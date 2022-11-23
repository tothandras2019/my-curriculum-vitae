import { createContext, useState, Dispatch, SetStateAction } from 'react'

//type
type NavitemsType = {
  [key: string]: string
}

//initial value
export const NavigationItems: NavitemsType[] = [
  { about: 'About me' },
  { certification: 'Certifications' },
  { works: 'Works' },
  { skills: 'My skills' },
  { knowme: 'Good to know' },
  { contact: 'Contact me' },
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
