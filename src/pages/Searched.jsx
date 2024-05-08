import { useEffect, useState } from "react";
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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=611d8782682c4b18bca80dd3f940affb&query=${name}`
    );
    const recipes = await data.json();

    // localStorage.setItem("recipe", JSON.stringify(recipes.results));

    setSearchedRecipes(recipes.results);
    // console.log(recipes.results);
    console.log(recipes);
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
