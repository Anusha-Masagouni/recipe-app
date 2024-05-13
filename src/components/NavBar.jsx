import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        {/* <NavItem>
          <NavLinks to="/">Home</NavLinks>
        </NavItem> */}
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sign-in">Sign In</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar();
