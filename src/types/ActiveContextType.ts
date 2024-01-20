import { Dispatch, SetStateAction } from "react"
import { Cords } from "./Cords"

export interface ActiveContextType {
  activeCells: Cords[]
  setActiveCells: Dispatch<SetStateAction<Cords[]>>
}