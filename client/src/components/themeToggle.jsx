import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashbordContext } from "../pages/DashbordLayout";

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme}= useDashbordContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme? (<BsFillSunFill className='toggle-icon'/>):
      (<BsFillMoonFill/>)}
    </Wrapper>
  )
}

export default ThemeToggle
