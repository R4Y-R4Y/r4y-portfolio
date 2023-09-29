"use-client"
import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";
import { useState } from "react";

export default function HomeScene() {

  const [model, setModel] = useState("")
  const [path, setPath] = useState("react")

  return (
    <>
      
      <Canvas >
        <OrbitControls />
        <ambientLight />
        <GizmoHelper />
        <gridHelper args={[10, 10]} />
        <pointLight intensity={10} position={[2, 2, 2]} />
        <Bubble/>
        <SVG3DModel pathFile={`icons/${path}.svg`} />
      </Canvas>
      {/* <form onSubmit={(event) => {
        event.preventDefault()
        setPath(model)
      }}>
        <input className="bg-black" onChange={(event) => setModel(event.target.value)} />
        <button type="submit">
          submit model
        </button>
      </form> */}
    </>
  );
}
