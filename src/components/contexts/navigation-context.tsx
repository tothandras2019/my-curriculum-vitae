import { createContext, useState, Dispatch, SetStateAction } from 'react'

export const NavigationItems: string[] = ['About me', 'Certifications', 'Works', 'My skills', 'Good to know', 'Contact me']

type updateType = Dispatch<SetStateAction<typeof NavigationItems>>
const defaultUpdate: updateType = () => NavigationItems

export const NavigationContext = createContext({ navItems: NavigationItems, setNavItems: defaultUpdate })

export const NavigationContextProvider = ({ children }: { children: any }) => {
  const [navItems, setNavItems] = useState(NavigationItems)
  return <NavigationContext.Provider value={{ navItems, setNavItems }}>{children}</NavigationContext.Provider>
}
