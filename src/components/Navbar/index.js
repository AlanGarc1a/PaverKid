import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import Button from "../Button";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  background-color: var(--lightGray);
  border-bottom: 0.2rem solid var(--primary);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  padding: 0 2rem;

  @media only screen and (max-width: 30em) {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;

  @media only screen and (max-width: 30em) {
    width: 40%;
    justify-content: space-around;
  }
`;

const NavTitle = styled.div`
  color: var(--black);
`;

const NavSpan = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;

  @media only screen and (max-width: 30rem) {
    display: none;
  }
`;

const NavListItem = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 0.2rem solid transparent;
  align-self: center;
  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover:not(:last-child) {
    border-bottom: 0.2rem solid var(--primary);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--black);
`;

const MenuSide = styled.div`
  display: none;
  @media only screen and (max-width: 30em) {
    display: block;
  }
`;

const MenuPhone = styled.a`
  display: none;
  border: 0.2rem solid var(--primary);
  border-radius: 0.3rem;
  padding: 1rem;
  vertical-align: middle;
  color: var(--black);

  @media only screen and (max-width: 30em) {
    display: inline-block;
  }
`;

const navLinks = [
  {
    title: "About Us",
    link: "#about",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Navbar = ({ toggle }) => {
  return (
    <Header>
      <MenuPhone href="tel:+8184065543">
        <BsTelephoneFill size={20} />
      </MenuPhone>
      <Nav>
        <NavTitle>
          <NavSpan>Pave It Landscape</NavSpan>
        </NavTitle>
        <NavList>
          {navLinks.map((item, index) => {
            return (
              <NavListItem key={index}>
                <NavLink href={item.link}>{item.title}</NavLink>
              </NavListItem>
            );
          })}
          <NavListItem>
            <Button href="mailto:Paveitlandscape@gmail.com">
              Free Estimate
            </Button>
          </NavListItem>
        </NavList>
      </Nav>
      <MenuSide onClick={toggle}>
        <AiOutlineMenu size={25} />
      </MenuSide>
    </Header>
  );
};

export default Navbar;
