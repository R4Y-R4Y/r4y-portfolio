import { GizmoHelper, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bubble from "../models/bubble";
import { SVG3DModel } from "../models/loader";

export default function HomeScene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <GizmoHelper />
      <gridHelper args={[10, 10]} />
      <pointLight intensity={10} position={[2, 2, 2]} />
      {/* <Bubble/> */}
      <SVG3DModel pathFile={"icons/firebase.svg"} />
    </Canvas>
  );
}
