"use-client"
import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Bubble from "../models/bubble";
import { MathUtils } from "three";
import Character from "../character";
import { AnimationProvider } from "@/context/AnimationContext";
import { EffectComposer } from "@react-three/postprocessing";

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
      {/* <gridHelper args={[10, 10]} /> */}
      <pointLight intensity={10} position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <AnimationProvider>
          <Character />
        </AnimationProvider>
      </Suspense>
    </>
  )
}