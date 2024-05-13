import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    font-size: 1rem;
  }
`;

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  useEffect(() => {
    // console.log(params.type)
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    //fetching the cuisine data from API
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=611d8782682c4b18bca80dd3f940affb&cuisine=${name}`
    );
    const recipes = await data.json();

    // localStorage.setItem("cuisine", JSON.stringify(recipes.results));

    setCuisine(recipes.results);
  };
  return (
    <Grid>
      {cuisine.map((item, index) => {
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

export default Cuisine;
