import menuStyle from "../styles/Menu.module.css"
import React from "react"
import {motion,AnimatePresence} from 'framer-motion'

const Menu = () => {
    const [showProjects,setShow1] = React.useState(false)
    const [showBlog,setShow2] = React.useState(false)
    const [showContact,setShow3] = React.useState(false)
return (
    <div>
        <div className={menuStyle.text_box}>
            <p className={menuStyle.text}>“You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity.”</p>
        </div>
        <div className={menuStyle.options_box}>

           <div className={menuStyle.options} onClick={()=>setShow1(!showProjects)}>
            <p>PROJECTS</p>

{/* Start content PROJECTS */}
            <div className={menuStyle.options_num}>
                <div className={!showProjects?menuStyle.square:menuStyle.square_a}></div>
                <p>01</p>
            </div>
            </div>
            
        <AnimatePresence>
           {showProjects?
           <motion.div
           initial={{opacity:0 }}
           animate={{ opacity:1 }}
           transition={{
               x: { duration: 0.3 },
               default: { ease: "easeInOut" }}}
           >
           <div className={menuStyle.content}>
                <div className={menuStyle.one}>
                    <p>1</p>
                </div>
                <div className={menuStyle.two}>
                    <p>2</p>
                </div>
                <div className={menuStyle.three}>
                    <p>3</p>
                </div>
                <div className={menuStyle.four}>
                    <p>4</p>
                </div>
                <div className={menuStyle.five}>
                    <p>5</p>
                </div>
                <div className={menuStyle.six}>
                    <p>6</p>
                </div>
            </div>

            {/* footer content  */}
            <div className={menuStyle.footer}>
                <p onClick={()=>setShow1(false)}className={menuStyle.x}>X</p>
                <p>MORE</p>
            </div>
            </motion.div>
            :null}
        </AnimatePresence>

{/* Ends content PROJECTS */}

{/* Start content BLOG */}
           <div className={menuStyle.options} onClick={()=>setShow2(!showBlog)}>
            <p>BLOG</p>
            <div className={menuStyle.options_num}>
                <div className={!showBlog?menuStyle.square:menuStyle.square_a}></div>
                <p>02</p>
            </div>
           </div>
           <AnimatePresence>
           {showBlog?
           <motion.div
           initial={{opacity:0 }}
           animate={{ opacity:1 }}
           transition={{
               x: { duration: 0.3 },
               default: { ease: "easeInOut" }}}
           >
           <div className={menuStyle.content}>
                <div className={menuStyle.one}>
                    <p>1</p>
                </div>
                <div className={menuStyle.two}>
                    <p>2</p>
                </div>
                <div className={menuStyle.three}>
                    <p>3</p>
                </div>
                <div className={menuStyle.four}>
                    <p>4</p>
                </div>
                <div className={menuStyle.five}>
                    <p>5</p>
                </div>
                <div className={menuStyle.six}>
                    <p>6</p>
                </div>
            </div>

            {/* footer content  */}
            <div className={menuStyle.footer}>
                <p onClick={()=>setShow2(false)} className={menuStyle.x}>X</p>
                <p>MORE</p>
            </div>

{/* Ends content BLOG */} 

           </motion.div>:null}
           </AnimatePresence>

           <div className={menuStyle.options} onClick={()=>setShow3(!showContact)}>
            <p>CONTACT</p>
            <div className={menuStyle.options_num}>
                <div className={!showContact?menuStyle.square:menuStyle.square_a}></div>
                <p>03</p>
            </div>
           </div>
           <AnimatePresence>
            {showContact?<motion.div
                initial={{opacity:0 }}
                animate={{ opacity:1 }}
                transition={{
                    x: { duration: 0.3 },
                    default: { ease: "easeInOut" }}}
            >
            <div className={menuStyle.links}>
                <a className={menuStyle.li} href={'https://www.instagram.com/axorosskopf/'}>INSTAGRAM</a>
                <a className={menuStyle.li} href={'https://www.linkedin.com/in/axel-c-3b7712220/'}>LINKEDIN</a>
                <a className={menuStyle.li} href={'https://twitter.com/axorosskopf'}>TWITTER</a>
                <a className={menuStyle.li} href={'https://github.com/AxoRosskopf'}>GITHUB</a>
                <a className={menuStyle.li} href={'https://medium.com/@axorosskopf'}>MEDIUM</a>
            </div>
       
           <div className={menuStyle.footer}>
                <p onClick={()=>setShow3(false)} className={menuStyle.x}>X</p>
            </div>
            </motion.div>:null}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Menu