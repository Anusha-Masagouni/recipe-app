// import './App.css'
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi'

const Logo = styled.div`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;

svg{
  font-size: 2rem;
}
`

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to="/">Delicious </Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
