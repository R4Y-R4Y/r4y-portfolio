import { Skill } from "@/ts/skills";
import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { ExtrudeGeometry } from "three";
export function SVG3DModel({ pathFile }: { pathFile: string }) {
  const svg: SVGResult = useLoader(SVGLoader, pathFile);
  const geometry = useRef<ExtrudeGeometry>()
  
  const [shapes] = useState(
    svg.paths.map((path, i) => {
      return { shape: SVGLoader.createShapes(path), color: path.color };
    })
  );

  return (
    <group onUpdate={(self) => {
      
    }}>
      {shapes.map((shape, i) => (
        <mesh scale={[.1,-.1,.1]} rotation-x={-Math.PI / 2} position={[-1.5, 0, 1.5]}>
          <extrudeGeometry args={[shape.shape, { depth: .25 * i, bevelEnabled: true, bevelThickness: i==0 ? .2 : .1 }]} />
          <meshStandardMaterial color={shape.color} />
        </mesh>
      ))}
    </group>
  );
}
