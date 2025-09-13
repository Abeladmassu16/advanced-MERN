import { FaHome } from "react-icons/fa"
import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from "react-icons/fa"
import Logo from "./logo"
import { useDashbordContext } from "../pages/DashbordLayout"
import LogoutContainer from "./LogoutContainer"
import ThemeToggle from './themeToggle'


const Navbar = () => {
   const {toggleSidebar} = useDashbordContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn"
        onClick={toggleSidebar}>
        <FaAlignLeft/>
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>Dashbord</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle/>
          <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
