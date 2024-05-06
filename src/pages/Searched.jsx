import { useEffect, useState } from "react";
// import { IoThermometer } from "react-icons/io5";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched();
  }, [params.search]);

  const getSearched = async (name) => {
    //fectching data
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=71ad04d259de48b2898e6bb88844f2c6&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes)
  };

  return (
    <Grid>
      {searchedRecipes.map((item, index) => {
        return (
          <Card key={index}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
