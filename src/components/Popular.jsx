import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  // border-radius: 2rem;
  overflow: hidden;
  position: relative;
  // margin: 0 1rem;

  img {
    // border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    font-weight: 600;
    text-align: center;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
   {
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
`;

const Popular = () => {
  //storing the data
  const [popular, setPopular] = useState([]);

  //here, useEffect hook is used to fetch the data from external API
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //checking local storage
    const check = localStorage.getItem("popular");

    //if there is any item in local storage, i dont wanna fetch again. so i will set data here

    if (check) {
      //pulling data back..JSON.parse is used to get the data from local storage..
      setPopular(JSON.parse(check));
    } else {
      // eslint-disable-next-line no-undef
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=611d8782682c4b18bca80dd3f940affb&number=9`
      );
      const data = await api.json();
      // console.log(data)

      //setting the data
      localStorage.setItem("popular", JSON.stringify(data.recipes));

      //storing data by using useState hook
      setPopular(data.recipes);
      // console.log(data.recipes)
    }
  };

  console.log(popular);
  return (
  
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {popular.map((recipe, index) => {
            return (
              <SplideSlide key={index}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
