import { HeaderContainer, Logo, NavContainer } from "./styles";
import PomodoroLogo from "../../assets/images/pomodoro-icon.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <Logo src={PomodoroLogo} alt="tomato icon" />
      </NavLink>
      <NavContainer>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}
