import { useContext, useState } from "react";
import { createContext } from "vm";

const AnimationContext = createContext(null!)

export const AnimationProvider = (props: any) => {
  const [animation, setAnimation] = useState()
  
  return(
    <AnimationContext.Provider
      value={{
        animation,
        setAnimation
      }}>
      {props.children}
    </AnimationContext.Provider>
  )
}