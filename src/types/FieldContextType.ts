import { Dispatch, SetStateAction } from "react"

export interface FieldContextType {
  fields: number,
  setFields: Dispatch<SetStateAction<number>>,
  isStarted: boolean
  setIsStarted: Dispatch<SetStateAction<boolean>>
}