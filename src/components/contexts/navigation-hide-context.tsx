import { createContext, Dispatch, SetStateAction, useState } from 'react'

type InitialStateType = {
  [key: string]: boolean
}

export const initialState: InitialStateType = { hide: false }

type UpdateStateType = Dispatch<SetStateAction<InitialStateType>>
const updateState: UpdateStateType = () => initialState

export const HideMenuContext = createContext({ isHidden: initialState, setIsHidden: updateState })

export const HideMenuContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isHidden, setIsHidden] = useState(initialState)

  return <HideMenuContext.Provider value={{ isHidden, setIsHidden }}>{children}</HideMenuContext.Provider>
}
