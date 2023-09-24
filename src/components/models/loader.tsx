import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
export function SVG3DModel({ pathFile }: { pathFile: string }) {
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
    <group >
      {shapes.map((shape, i) => (
        <mesh scale={[.1,-.1,.1]} rotation-x={-Math.PI / 2} position={[-1.5, 0, 1.5]}>
          <extrudeGeometry args={[shape.shape, { depth: .25 * i, bevelEnabled: true, bevelThickness: i==0 ? .2 : .1 }]} />
          <meshStandardMaterial color={shape.color} />
        </mesh>
      ))}
    </group>
  );
}
