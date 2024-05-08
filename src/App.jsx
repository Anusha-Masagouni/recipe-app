// import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Category from "./components/Category";

import Search from "./components/Search";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

import styled from "styled-components";
// import { KnifeFork } from "react-icons/gi";

const Logo = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const NavBar = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar>
        {/* <KnifeFork /> */}
        <Link to="/">Delicious </Link>
      </NavBar>
      
        <Search />
        <Category />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
