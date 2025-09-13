// src/components/BigSidebar.jsx
import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./logo";
import { useDashbordContext } from "../pages/DashbordLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashbordContext();
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
