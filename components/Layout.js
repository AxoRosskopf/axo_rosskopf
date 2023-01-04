import Nav from "./Nav"
import Landing from "./Landing"
import Red from "./Red"
import Menu from "./Menu"
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
        <Nav />
        <div>
            {children}
            <Landing />
        </div>
        <Red />
        <Menu />
        
    </>
  )
}

export default Layout