import { MeshProps, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import ThreeCustomShaderMaterial from "three-custom-shader-material";
import { noise } from "@/ts/shaders";

type MyProps = MeshProps & {
  materialProps: THREE.MeshToonMaterialParameters;
};

export default function Bubble(props: MyProps) {
  const { materialProps, ...meshProps} = props
  
  const material = useMemo(() => new THREE.MeshToonMaterial({
    color: "#42fff6",
    transparent: false,
    opacity: .6,
    side: THREE.BackSide,
    ...materialProps
  }), [materialProps]);

  const ref = useRef<CustomShaderMaterialType>()

  useFrame(state => {
    if(ref?.current)
      ref.current.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh 
      onPointerOver={e => {
        e.stopPropagation()
        material.color.set("#f00")
      }} 
      onPointerOut={e => {
        e.stopPropagation()
        material.color.set(materialProps?.color ?? "#42fff6")
      }} 
    {...meshProps}>
      <icosahedronGeometry args={[3,5]} />
      <ThreeCustomShaderMaterial
        ref={ref}
        baseMaterial={material}
        uniforms={{
          uTime: { value: 0 },
          random: {value: Math.random()*100 }
        }}
        vertexShader={
          noise + `
          uniform float random;

          void main() {

            vUv = uv;
            
            // add time to the noise parameters so it's animated
            noise = 3.0 *  -.10 * turbulence( .5 * normal + uTime );
            float b = 1.0 * pnoise( 0.05 * position + vec3( 1.0 * uTime + random ), vec3( 5.0 ) );
            float displacement = - noise + b;
          
            vec3 newPosition = position + normal * displacement;
            csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 ); 
          }
        `}

      />
    </mesh>
  );
}

