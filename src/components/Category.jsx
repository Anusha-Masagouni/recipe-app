import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 1rem;
text-decoration: none;
// background: linear-gradient(35deg, #10439F, #68D2E8);
background: #10439F;
width: 8rem;
height: 8rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: #ffff;
    font-size: 1.1rem;
}

 svg {
    color: #ffff;
    font-size: 2rem;
    margin-top: 0.5rem
 }
 &.active {
    background: linear-gradient(to right, #10439F, #68D2E8);
    box-shadow: 0px 6px 10px 0px #3b3a3a;

    svg {
         color: #ffff;
    }

    h4 {
        color: #ffff;
    }
 }

`;


const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>

        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>

        <SLink to={'/cuisine/Indian'}>
            <GiNoodles />
            <h4>Indian</h4>
        </SLink>

        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

export default Category
