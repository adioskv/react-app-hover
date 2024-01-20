import { createContext } from "react";
import { FieldContextType } from "../types/FieldContextType";

export const FieldContext = createContext<FieldContextType>({
  fields: 0,
  setFields: () => {},
  isStarted: false,
  setIsStarted: () => {},
});
