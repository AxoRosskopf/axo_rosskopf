import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader'

const Model = () => {
    const gltf = useLoader(GLTFLoader, './model.gltf')
  return (
    <Suspense>
        <primitive object={gltf.scene}/>
    </Suspense>
  )
}

export default Model