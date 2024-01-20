import { useState } from "react";
import { ActiveContext } from "../context/ActiveContext";
import { Cords } from "../types/Cords";

export const ActiveProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [activeCells, setActiveCells] = useState<Cords[]>([]);

  return (
    <ActiveContext.Provider value={{
      activeCells,
      setActiveCells,
    }}>
      {children}
    </ActiveContext.Provider>
  )
};