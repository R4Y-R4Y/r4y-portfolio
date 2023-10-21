"use-client"
import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Character } from "../character";
import { Suspense } from "react";

export default function HomeScene() {
  return (
    <Canvas>
      <Scene/>
    </Canvas>
  )
}

function Scene() {

  return(
    <>
      <OrbitControls />
      <ambientLight />
      <GizmoHelper />
      <gridHelper args={[10, 10]} />
      <pointLight intensity={10} position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Character/>
      </Suspense>
    </>
  )
}