import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

const Recipe = () => {
  const [details, setDetails] = useState({});
  let params = useParams();

  //for buttons
  const [activeTab, setActiveTab] = useState("ingredients");

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=71ad04d259de48b2898e6bb88844f2c6`
    );

    const detailData = await data.json();

    setDetails(detailData);
    console.log(detailData);
  };
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
    
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>

        {/* <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>

            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>

          <ul>
            {details.extendedIngredients.map((ingredients, index) => {
              return <li key={index}>{ingredients.original}</li>;
            })}
          </ul> */}
        
        
        {/* {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>

            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredients, index) => {
              return <li key={index}>{ingredients.original}</li>;
            })}
          </ul>
        )} */}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;