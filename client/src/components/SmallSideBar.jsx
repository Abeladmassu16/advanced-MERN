import { FaTimes } from "react-icons/fa"
import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashbordContext } from "../pages/DashbordLayout"
import Logo from "./logo"
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"


const SmallSideBar = () => {
   const {showSidebar, toggleSidebar} = useDashbordContext();
  return (
    <Wrapper>
      <div className={showSidebar?"sidebar-container show-sidebar":
         "sidebar-container"}>
      <div className="content"> 
      <button type="button" className="close-btn" onClick={toggleSidebar}>
      <FaTimes/>
      </button>
      <header>
        <Logo/>
      </header>
      <Navlinks/>
      </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar
