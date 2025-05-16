import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme["darkGreen"]};
    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["darkGreen"]};
    }
    &.active {
      color: ${(props) => props.theme["sinopia"]};
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["sinopia"]};
      }
    }
  }
`;
