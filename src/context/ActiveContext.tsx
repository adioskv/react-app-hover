import { createContext } from "react";
import { ActiveContextType } from "../types/ActiveContextType";

export const ActiveContext = createContext<ActiveContextType>({
  activeCells: [],
  setActiveCells: () => {},
});
