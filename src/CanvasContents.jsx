import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei';

function CanvasContents() {
  const mesh = useRef();

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />
      
      <ambientLight color="#ffffff" intensity={0.1} />
      <directionalLight color="#ffffff" position={[0, 1, 2]} intensity={0.9} />

      <mesh ref={mesh}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default CanvasContents
