import navStyle from "../styles/Nav.module.css"
import Image from "next/image"
import logo from "../public/logo.svg"
import {motion,AnimatePresence} from 'framer-motion'
import React from "react"

const Nav = () => {
  const [show,setShow] = React.useState(false)
  return (
    <nav className={navStyle.nav}>
        <ul className={navStyle.items}>
            <li>
                <Image src={logo} className={navStyle.logo}/>
            </li>
            <div className={navStyle.box_menu}>
            <li className={navStyle.menu} onClick={()=>setShow(!show)}>
                menu.
            </li>
            <AnimatePresence>
            {show?<motion.div
              initial={{opacity:0 }}
              animate={{ opacity:1 }}
              transition={{
                  x: { duration: 0.3 },
                  default: { ease: "easeInOut" }}}
              className={navStyle.box_menu}
            >
            <a className={navStyle.menu_item} href={'https://www.linkedin.com/in/axel-c-3b7712220/'}>
              contact
            </a>
            <a className={navStyle.menu_item} href={'https://medium.com/@axorosskopf'}>
              blog
            </a>
            <a className={navStyle.menu_item} href={'https://github.com/AxoRosskopf'}>
              projects
            </a>
            </motion.div>:null}
            </AnimatePresence>
            </div>
        </ul>
    </nav>
  )
}
export default Nav