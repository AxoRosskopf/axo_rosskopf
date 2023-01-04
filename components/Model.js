import { Suspense } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

const Model = () => {
    const obj = useLoader(OBJLoader, './1.obj')
  return (
    <Suspense>
        <primitive object={obj}/>
    </Suspense>
  )
}

export default Model