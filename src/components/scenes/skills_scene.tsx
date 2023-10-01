"use-client"
import { GizmoHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three"
import { fibonacciSphere, skills } from "@/ts/skills";
import { useControls } from "leva";


export default function SkillBubbleScene() {
  return (
    <Canvas camera={{ position:[15,7,25] }} > 
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const {radius} = useControls({radius: 12})
  const sphereArray = useMemo(() => fibonacciSphere(skills.length, radius), [radius]) 
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
    state.camera.lookAt(new THREE.Vector3(0,0,0))
    bubbleRef.current.rotation.y = state.clock.getElapsedTime()/5
    bubbleRef.current.rotation.x = state.clock.getElapsedTime()/10
    bubbleRef.current.rotation.z = state.clock.getElapsedTime()/15
  })
  return(
  <>
    <GizmoHelper />
    <directionalLight intensity={10} position={[17, 12, 13]} />
    <group ref={bubbleRef} >
    {
      sphereArray.map((position, i) =>
        <Skill pathFile={skills[i].icon} position={position}/>
      )
    }
    </group>
  </>)
}

function Skill(props:{pathFile: string, position: THREE.Vector3}) {
  const {pathFile, position} = props
  const ref = useRef<THREE.Group>(null!)
  useFrame(() => {
    ref.current.lookAt(new THREE.Vector3(15,7,25))
  })

  return(
    <group >
      <Bubble materialProps={{color: "#fff"}} position={position}  />
      <SVG3DModel ref={ref} position={position} pathFile={pathFile}/>
    </group>
  )
}