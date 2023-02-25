import {
  AiOutlineClose,
  AiOutlineCompass,
  AiOutlineContacts,
  AiOutlineGlobal,
  AiOutlineHome,
} from "react-icons/ai";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: none;
  background-color: var(--white);
  height: 100%;
  width: 85%;
  position: fixed;
  top: 0;
  right: 0;
  right: ${(props) => (props.isOpen ? "0" : "-85%")};
  z-index: 999;
  transition: 0.3s ease-in-out;
  border-radius: 1.5rem;

  @media only screen and (max-width: 30em) {
    display: block;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--primary);
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
  padding: 0 4rem;
`;

const SidebarClose = styled(AiOutlineClose)`
  align-self: center;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  margin-top: 3rem;
  margin-left: 4rem;
`;

const SidebarItem = styled.li`
  font-size: 2.5rem;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const SidebarLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  text-decoration: none;
  color: var(--black);
`;

const NavButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  border: none;
  background-color: var(--primary);
  color: var(--white);
  font-size: var(--defaultFontSize);
  cursor: pointer;
`;

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <span>Paver It Landscape</span>
        <SidebarClose onClick={toggle} />
      </SidebarHeader>
      <SidebarList>
        <SidebarItem onClick={toggle}>
          <SidebarLink href="#home">
            <AiOutlineHome size={22} /> Home
          </SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={toggle}>
          <SidebarLink href="#about">
            <AiOutlineCompass size={22} /> About Us
          </SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={toggle}>
          <SidebarLink href="#services">
            <AiOutlineGlobal size={22} /> Services
          </SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={toggle}>
          <SidebarLink href="#contact">
            <AiOutlineContacts size={22} /> Contact
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <NavButton>Free Estimate</NavButton>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
