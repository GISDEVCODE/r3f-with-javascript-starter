import { Canvas } from '@react-three/fiber';
import './App.css'
import CanvasContents from './CanvasContents';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={ { fov: 60, position: [0, 1, 3]} }>
        <CanvasContents />
      </Canvas>
    </div>
  )
}

export default App
