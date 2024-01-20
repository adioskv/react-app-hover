import { useState } from "react";
import { FieldContext } from "../context/FieldContext";

export const FieldProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [isStarted, setIsStarted] = useState(false);
  const [fields, setFields] = useState<number>(0);

  return (
    <FieldContext.Provider value={{
      fields,
      setFields,
      isStarted,
      setIsStarted,
    }}>
      {children}
    </FieldContext.Provider>
  )
};