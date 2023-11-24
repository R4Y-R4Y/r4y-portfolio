import { Float, PerspectiveCamera, RandomizedLight } from "@react-three/drei";
import { SVG3DModel } from "../models/loader";

export function Iberis() {
  return(
    <>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 7]} intensity={20} />
      <PerspectiveCamera makeDefault position={[0, 1, 7]} />
      <Float>
        <SVG3DModel position={[-3,0,0]} path="/icons/bank.svg" />
      </Float>
      <Float>
        <SVG3DModel position={[3,0,0]} path="/icons/table.svg" />
      </Float>
    </>
  )
}