"use-client"
import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas, PerspectiveCameraProps, useFrame, useThree } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three"
import { fibonacciSphere, skills } from "@/ts/skills";
import { useControls } from "leva";


export default function SkillBubbleScene() {
  
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

  return (
    <Canvas 
      camera={{ position:[15,7,25] }} 
    >
      
      <Hook/>
      <GizmoHelper />
      <directionalLight intensity={10} position={[17, 12, 13]} />
      <gridHelper args={[10, 10]} />
      {
        sphereArray.map((position, i) =>
        <>
          <Bubble color={"#fff"} position={position}/>
          <SVG3DModel position={position} pathFile={`${skills[i].icon}`}/>
        </> 
        )
      }
    </Canvas>
  );
}

function Hook() {
  useFrame((state) => {
    state.camera.lookAt(new THREE.Vector3(0,0,0))
  })
  return(<></>)
}