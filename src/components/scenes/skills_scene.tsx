import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";
import { useState } from "react";
import * as THREE from "three"
import { fibonacciSphere, skills } from "@/ts/skills";
import { useControls } from "leva";
export default function SkillBubbleScene() {

  
  const {radius} = useControls({radius: 1})
  const sphereArray = fibonacciSphere(skills.length, radius)

  return (
    <Canvas >
      <OrbitControls />
      <ambientLight />
      <GizmoHelper />
      <gridHelper args={[10, 10]} />

      {
        sphereArray.map((position, i) => 
          <Bubble position={position}/>
        )
      }
    </Canvas>
  );
}
