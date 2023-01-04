import landingStyle from "../styles/Landing.module.css"
import { useViewportScroll, motion, useTransform} from "framer-motion"
import { useInView } from "@react-spring/web"

const Landing = () => {
  
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0,300], [0, 50])
  const y2 = useTransform(scrollY, [0,300], [0, -50])
  const y3 = useTransform(scrollY, [0,300], [0,30])

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOne:false
  });

  console.log(entry);
  return (
    <div className={landingStyle.center}>
      <motion.div className={landingStyle.box} style={{y:y3}}>
      <motion.video autoPlay muted loop className={landingStyle.video} style={{y:y2}} >         
        <source src="/bg.mp4" />       
      </motion.video>
        <motion.div className={landingStyle.text_box} style={{y:y1}}>
          <h1>C O M P U T E R_</h1>
          <h1>E N T H U S I A S T.</h1>
        </motion.div>
      </motion.div>
    </div>


  )
}

export default Landing