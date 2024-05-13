import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import NavBar from "./components/NavBar";

import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
// import AboutUs from './pages/AboutUs';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
// import ContactUs from './pages/ContactUs';


// const Logo = styled.div`
//   text-decoration: none;
//   font-size: 1.5rem;
//   font-weight: 400;
//   font-family: "Lobster Two", cursive;
// `;

const Navigation = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 2.9rem;
    color: #10439F;
  }

`;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

      <Navigation>
        <Link to="/"><GiKnifeFork /></Link>
        {/* <NavBar /> */}
      </Navigation>
       {/* <NavBar />  */}
        <Search />
        <Category />
        <Routes>
          
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} /> */}
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
