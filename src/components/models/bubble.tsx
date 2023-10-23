import { MeshProps } from "@react-three/fiber";
import { forwardRef, useMemo } from "react";
import * as THREE from "three";

type MyProps = MeshProps & {
  materialProps?: THREE.MeshToonMaterialParameters;
};

const Bubble = forwardRef<THREE.Mesh, MyProps>((props,ref)=> {
  const { materialProps, ...meshProps} = props
  
  const materialToon = useMemo(() => new THREE.MeshToonMaterial({
    color: "#42fff6",
    transparent: false,
    opacity: .6,
    side: THREE.BackSide,
    ...materialProps
  }), [materialProps]);


  return (
    <mesh 
      onPointerOver={e => {
        e.stopPropagation()
        materialToon.color.set("#f00")
      }} 
      onPointerOut={e => {
        e.stopPropagation()
        materialToon.color.set(materialProps?.color ?? "#42fff6")
      }}
      material={materialToon} 
      ref={ref}
    {...meshProps}>
      <icosahedronGeometry args={[3,5]} />
    </mesh>
  );
})

export default Bubble

