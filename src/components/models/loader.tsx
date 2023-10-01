import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { GroupProps, useLoader } from "@react-three/fiber";
import { forwardRef, useEffect, useState } from "react";

export const SVG3DModel = forwardRef<THREE.Group,{ pathFile: string } & GroupProps>((props , ref) => {
  const {pathFile, ...groupProps} = props
  const svg: SVGResult = useLoader(SVGLoader, pathFile);
  const [shapes, setShapes] = useState(
    svg.paths.map((path, i) => {
      return { shape: SVGLoader.createShapes(path), color: path.color };
    })
  );
  
  useEffect(()=>{
    const svg: SVGResult = useLoader(SVGLoader, pathFile);
    setShapes(svg.paths.map((path, i) => {
      return { shape: SVGLoader.createShapes(path), color: path.color };
    }))
  }
  ,[pathFile])



  return (
    <group ref={ref} {...groupProps} >
      {shapes.map((shape, i) => (
        <mesh scale={[.1,-.1,.1]} rotation={[2 * Math.PI ,0,0]} position={[-1.5, -1.5, 0]}>
          <extrudeGeometry args={[shape.shape, { depth: .25 * i, bevelEnabled: true, bevelThickness: i==0 ? .2 : .1 }]} />
          <meshBasicMaterial color={shape.color} />
        </mesh>
      ))}
    </group>
  );
})

