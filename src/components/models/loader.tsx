import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { GroupProps, useLoader } from "@react-three/fiber";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three"
import { skills } from "@/ts/skills";
export const SVG3DModel = forwardRef<THREE.Group,{ index: number } & GroupProps>((props , ref) => {
  const {index, ...groupProps} = props
  const svg: SVGResult = useMemo(() => useLoader(SVGLoader, skills[index].icon),[])
  
  const shapes = useMemo(
    () => svg.paths.map((path, i) => {
      return { shape: SVGLoader.createShapes(path), color: path.color };
    })
  ,[index]);

  const meshes = useMemo(() => shapes.map((shape, i) => new THREE.Mesh(
    new THREE.ExtrudeGeometry(shape.shape, { depth: i, bevelEnabled: true, bevelThickness: i==0 ? .2 : .1 }),
    new THREE.MeshBasicMaterial({color: shape.color})
  )),[index])

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

