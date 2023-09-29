import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import ThreeCustomShaderMaterial from "three-custom-shader-material";
import { noise } from "@/ts/shaders";

export default function Bubble(props: MeshProps & THREE.MeshToonMaterialParameters) {
  const material = new THREE.MeshToonMaterial({
    color: "#42fff6",
    transparent: true,
    opacity: .8,
    side: THREE.BackSide,
    ...props
  });

  const ref = useRef<CustomShaderMaterialType>()

  useFrame(state => {
    if(ref?.current)
      ref.current.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh {...props}>
      <icosahedronGeometry args={[3,5]} />
      <ThreeCustomShaderMaterial
        ref={ref}
        baseMaterial={material}
        uniforms={{
          uTime: { value: 0 },
          random: {value: Math.random()*100 }
        }}
        vertexShader={noise + /* glsl */`
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
