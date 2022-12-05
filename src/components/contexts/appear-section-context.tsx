import { useState, createContext, Dispatch, SetStateAction } from 'react'

type AppearType = { [key: string]: boolean }
const AppearValue: AppearType = { isAppear: false }

type udateType = Dispatch<SetStateAction<typeof AppearValue>>
const updateAppear: udateType = () => AppearValue
export const AppearContext = createContext({ willAppear: AppearValue, setWillIsAppear: updateAppear })

export const AppearContextProvider = ({ children }: { children: any }): JSX.Element => {
  const [willAppear, setWillIsAppear] = useState(AppearValue)
  return <AppearContext.Provider value={{ willAppear, setWillIsAppear }}>{children}</AppearContext.Provider>
}
