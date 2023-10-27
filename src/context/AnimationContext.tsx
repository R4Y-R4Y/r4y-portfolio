import { createContext, useContext, useState } from "react";

type Animations = "magic" | "type" | "dance"
interface AnimationValues { 
  animation: Animations, 
  changeCurrentAnimation: Function
}
const AnimationContext = createContext<AnimationValues>({
  animation: "magic",
  changeCurrentAnimation: ()=>{}
});
export const AnimationProvider = (props: any) => {
  const [selectedAnimation, setSelectedAnimation] = useState<Animations>("type")
  
  function changeCurrentAnimation(){
    switch (selectedAnimation) {
      case "magic":
        setSelectedAnimation("type")
        break;
      case "type":
        setSelectedAnimation("dance")
        break;
      case "dance":
        setSelectedAnimation("magic")
        break;
    }
  }

  return(
    <AnimationContext.Provider
      value={{
        animation: selectedAnimation,
        changeCurrentAnimation
      }}>
      {props.children}
    </AnimationContext.Provider>
  )
}

export const useCharacterAnimations = () => useContext(AnimationContext)