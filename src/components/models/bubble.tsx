import { MeshProps } from "@react-three/fiber";
import { forwardRef, useMemo } from "react";
import * as THREE from "three";
import twconfig from "../../../tailwind.config";

type MyProps = MeshProps & {
  materialProps?: THREE.MeshToonMaterialParameters;
};

const Bubble = forwardRef<THREE.Mesh, MyProps>((props,ref)=> {
  const { materialProps, ...meshProps} = props

  const materialToon = useMemo(() => new THREE.MeshToonMaterial({
    color: "#6633ff",
    transparent: false,
    opacity: .6,
    side: THREE.BackSide,
    ...materialProps
  }), [materialProps]);


  return (
    <mesh 
      onPointerOver={e => {
        e.stopPropagation()
        materialToon.color.set("#8e0b8b")
        document.body.style.cursor = "pointer"
      }} 
      onPointerOut={e => {
        e.stopPropagation()
        materialToon.color.set(materialProps?.color ?? "#6633ff")
        document.body.style.cursor = "default"
      }}
      material={materialToon} 
      ref={ref}
    {...meshProps}>
      <icosahedronGeometry args={[3,5]} />
    </mesh>
  );
})

export default Bubble

