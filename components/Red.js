import  { useMemo, useLayoutEffect ,useEffect } from "react"
import Model from "./Model"
import redStyle from "../styles/Red.module.css"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { useViewportScroll, motion, useTransform} from "framer-motion"
import { useInView } from "@react-spring/web"


const Red = () => {

  const { scrollY } = useViewportScroll();

  const y2 = useTransform(scrollY, [0,7000], [0,-1000])

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOne:false
  });

  console.log(entry);
  return (
    <motion.div className={redStyle.all} >
       <div className={redStyle.container} >
        <Canvas camera={{ position: [0, 0, 3], fov:40 }}>
          {/* <ambientLight color={"white"} intensity={1}/> */}
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[60, 40, 80]} castShadow />
          <spotLight intensity={0.5} angle={-0.2} penumbra={1} position={[-30, 10, -20]} castShadow />
          <spotLight intensity={0.1} angle={-0.2} penumbra={1} position={[0, -30, 0]} castShadow />
          <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false}/>
            <Model />
          <AsciiRenderer fgColor="white" bgColor="none" />
        </Canvas>
       </div>
      <motion.div className={redStyle.text_box} style={{y:y2}}>
        <p className={redStyle.text}>CPP_PYTHON_MONGODB_EXPRESS_REACT_NODEJS_TYPESCRIPT.</p>
      </motion.div>
    </motion.div>
  )
  function AsciiRenderer({
    renderIndex = 1,
    bgColor = 'none',
    fgColor = 'white',
    characters = ' .:-<*=%@ ',
    invert = true,
    color = false,
    resolution = 0.19
  }) {
    // Reactive state
    const { size, gl, scene, camera } = useThree()
  
    // Create effect
    const effect = useMemo(() => {
      const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
      effect.domElement.style.position = 'absolute'
      effect.domElement.style.top = '0px'
      effect.domElement.style.left = '0px'
      effect.domElement.style.pointerEvents = 'none'
      return effect
    }, [characters, invert, color, resolution])
  
    // Styling
    useLayoutEffect(() => {
      effect.domElement.style.color = fgColor
      effect.domElement.style.backgroundColor = bgColor
    }, [fgColor, bgColor])
  
    // Append on mount, remove on unmount
    useEffect(() => {
      gl.domElement.style.opacity = '0'
      gl.domElement.parentNode.appendChild(effect.domElement)
      return () => {
        gl.domElement.style.opacity = '1'
        gl.domElement.parentNode.removeChild(effect.domElement)
      }
    }, [effect])
  
    // Set size
    useEffect(() => {
      effect.setSize(size.width, size.height)
    }, [effect, size])
  
    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
      effect.render(scene, camera)
    }, renderIndex)
  
    // This component returns nothing, it is a purely logical
  }
}

export default Red