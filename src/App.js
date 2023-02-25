import Landing from "./pages/Landing";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <GlobalStyle menuOpen={menuOpen} />
      <Sidebar isOpen={menuOpen} toggle={toggleMenu} />
      <Navbar toggle={toggleMenu} />
      <Landing />
    </>
  );
}

export default App;
