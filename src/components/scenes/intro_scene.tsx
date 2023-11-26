"use-client"
import { Camera, Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState} from "react";
import Character from "../character";
import { AnimationProvider } from "@/context/AnimationContext";
import { Loader } from "@react-three/drei";
import { useInView } from "framer-motion";

export default function HomeScene() {
  // [-1.19,2.08,3.28]
  // [-.27,-.285,-.08]
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)
  return (
    <>
      <Canvas camera={{position: [-1,1.88,3.28], rotation: [-.27,-.285,-.08]}} >
        <Scene/>
      </Canvas>
    </>
  )
}

function Scene() {

  // const [cameraValue, setCameraValue] = useState<Camera>()
  return(
    <>
      {/* <OrbitControls onChange={(e) => {setCameraValue(e?.target.object)}} /> */}
      <ambientLight />
      {/* <GizmoHelper /> */}
      {/* <gridHelper args={[10, 10]} /> */}
      <pointLight intensity={10} position={[2, 2, 2]} />

        <AnimationProvider>
          <Character />
        </AnimationProvider>
      {/* <Html  position={[0,2,0]}>
        <p>{cameraValue?.position.x}</p>
        <p>{cameraValue?.position.y}</p>
        <p>{cameraValue?.position.z}</p>
      </Html>
      <Html>
        <p>{cameraValue?.rotation.x}</p>
        <p>{cameraValue?.rotation.y}</p>
        <p>{cameraValue?.rotation.z}</p>
      </Html> */}
    </>
  )
}