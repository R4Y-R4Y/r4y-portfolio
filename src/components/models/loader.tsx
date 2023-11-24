import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { GroupProps, useLoader } from "@react-three/fiber";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three"
export const SVG3DModel = forwardRef<THREE.Group,{ path: string } & GroupProps>((props , ref) => {
  
  const {path, ...groupProps} = props
  const svg: SVGResult = useLoader(SVGLoader, path)
  
  const shapes = useMemo(
    () => svg.paths.map((path, i) => {
      return { shape: SVGLoader.createShapes(path), color: path.color };
    })
  ,[svg,path]);

  const meshes = useMemo(() => shapes.map((shape, i) => new THREE.Mesh(
    new THREE.ExtrudeGeometry(shape.shape, { depth: i*.2, bevelEnabled: true, bevelThickness: i==0 ? .2 : .1 }),
    new THREE.MeshBasicMaterial({color: shape.color})
  )),[shapes,path])

  const addingRef = useRef<THREE.Mesh>(null!)

  meshes.forEach((mesh) => {
    mesh.scale.set(.1,-.1,.1)
    mesh.rotation.set(2 * Math.PI ,0,0)
    mesh.position.set(-1.5, -1.5, 0)
  })

  useEffect(() => meshes.forEach((mesh) => addingRef.current.add(mesh)) )

  return (
    <group ref={ref} {...groupProps} >
      <mesh ref={addingRef} >
      </mesh>
    </group>
  );
})

SVG3DModel.displayName = "Bubble";

