import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import { ReactTyped } from "react-typed";

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3 {
    // color: #10439f;
    margin-bottom: 2rem;
    font-size: 2.2rem;
    // filter: drop-shadow(2px 3px 10px #10439f);
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #07C8F9 0%,
      #6B5277 29%,
      #2d00f7 67%,
      #d11149 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    // -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;

  }
  
  @keyframes textclip {
    to {
      background-position: 200% center;
    }

  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  // margin: 0 1rem;
  box-shadow: inset -1px 3px 8px 5px #68d2e8, 2px 5px 20px 0px #10439f,
    5px 5px 16px 5px rgba(0, 0, 0, 0.15);

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
    color: #ffff;
    width: 100%;
    font-weight: 700;
    text-align: center;
    font-size: 1.15rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px #10439f, 3px 3px 5px #68d2e8;
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

const Veggie = () => {
  //storing the data
  const [veggie, setVeggie] = useState([]);

  //here, useEffect hook is used to fetch the data from external API
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    //checking local storage
    const check = localStorage.getItem("veggie");

    //if there is any item in local storage, i dont wanna fetch again. so i will set data here

    if (check) {
      // pulling data back..JSON.parse is used to get the data from local storage..
      setVeggie(JSON.parse(check));
    } else {
      // eslint-disable-next-line no-undef
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=611d8782682c4b18bca80dd3f940affb&number=9&tags=vegetarian`
      );
      const data = await api.json();
      // console.log(data)
      // console.log(data.recipes)

      //setting the data
      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      //storing data by using useState hook
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };
  // console.log(data.recipes);

  //text shadow
  // const shadowX = useSpring(0);
  // const shadowY = useMotionValue(0);

  // const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px -2px 5px 51px 9px rgba(0,0,0,0.5))`;

  return (
    <div>
      <Wrapper>
        <div>
          <h3>
            {/* <motion.div style={{ filter: shadow }}>Veg Items</motion.div> */}
            <h3>Veg Items</h3>
          </h3>
        </div>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "4rem",
          }}
        >
          {veggie.map((recipe, index) => {
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

export default Veggie;
