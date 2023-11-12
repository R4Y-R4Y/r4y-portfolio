"use-client"
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three"
import { Skill, fibonacciSphere, skills } from "@/ts/skills";
import { useControls } from "leva";



export default function SkillBubbleScene() {

  const [skill, setSkill] = useState<Skill | undefined>()

  return (
  <>
    <div className="h-screen w-screen lg:w-1/2">
      <Canvas camera={{ position:[15,7,25] }} > 
        <Scene skill={skill} setSkill={setSkill} />
      </Canvas>
    </div>
    <div className="p-10 text-center w-screen lg:w-1/2">
      <h2 className="text-primary-400 font-bold">Skill: {skill?.name} </h2>
      <h3 className="font-bold">Description: {skill?.description} </h3>
      
    </div>
  </>
  );
}

function Scene(props: {skill: Skill | undefined, setSkill: Dispatch<SetStateAction<Skill | undefined>>}){
  const {skill, setSkill} = props
  // const {radius} = useControls({radius: 13})
  const radius = 13
  const sphereArray = fibonacciSphere(skills.length, radius)
  
  // const {
    //   x,
    //   y,
    //   z,
    //   rx,
    //   ry,
    //   rz,
    //   i
    // } = useControls({
      //   rx:{value: 0, min:0, max: Math.PI},
      //   ry:{value: 0, min:0, max: Math.PI},
      //   rz:{value: 0, min:0, max: Math.PI},
      //   x:{value: 0, min:-20, max: 20},
      //   y:{value: 0, min:-20, max: 20},
      //   z:{value: 0, min:-20, max: 20},
      //   i:{value: 10, min:0, max: 20}
      // })
  const bubbleRef = useRef<THREE.Group>(null!)
  useFrame((state) => {
    state.camera.lookAt(0,0,0)
    bubbleRef.current.rotation.y = state.clock.getElapsedTime()/5
    bubbleRef.current.rotation.x = state.clock.getElapsedTime()/10
    bubbleRef.current.rotation.z = state.clock.getElapsedTime()/15
  })
  return(
  <>
    <PerspectiveCamera position={[15,7,25]}/>
    <directionalLight intensity={10} position={[17, 12, 13]} />
    <group ref={bubbleRef} >
    { sphereArray.map((position, i) =>
        <Skill key={i} onClick={() => setSkill(skills[i])} index={i} position={position}/>
    )}
    </group>
  </>)
}

function Skill(props:{index: number, position: Vector3, onClick: Function}) {
  const {index, position, onClick} = props
  const ref = useRef<THREE.Group>(null!)
  useFrame(() => {
    ref.current.lookAt(15,7,25)
  })

  return(
    <>
      <Bubble onClick={e => {
        e.stopPropagation()
        onClick()
      }} position={position}  />
      <SVG3DModel ref={ref} position={position} path={skills[index].icon}/>
    </>
  )
}