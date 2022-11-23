import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { ColorObjectType } from '../../DATA/data-types'

//type
// imported :ColorObjectType

//initial value
const BackgroundColor: ColorObjectType = { primary: 'primary', secondary: 'secondary' }

//update-Dispatch-defaultUpdate
type updateType = Dispatch<SetStateAction<ColorObjectType>>
const defaultUpdate: updateType = () => BackgroundColor

//context
export const BackgroundContext = createContext({ backgroundItem: BackgroundColor, SetBackgroundItem: defaultUpdate })

//Provider
export const BackgroundContextProvider = ({ children }: { children: JSX.Element }) => {
  const [backgroundItem, SetBackgroundItem] = useState(BackgroundColor)
  return <BackgroundContext.Provider value={{ backgroundItem, SetBackgroundItem }}>{children}</BackgroundContext.Provider>
}
