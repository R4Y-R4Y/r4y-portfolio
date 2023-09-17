import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bubble from "../models/bubble";

export default function HomeScene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight intensity={10} position={[2, 2, 2]} />
      <Bubble/>
      
    </Canvas>
  );
}
