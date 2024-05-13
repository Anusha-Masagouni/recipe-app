import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #68D2E8, #10439F);
    color: white;
  }
  h2 {
    margin-bottom: 2.5rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem
  }
`;
const Button = styled.button`
  font-size: 1rem;
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
  }, [params.id]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=611d8782682c4b18bca80dd3f940affb`
    );

    const detailData = await data.json();

    // localStorage.setItem("recipe", JSON.stringify(detailData));

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
        
        
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>

            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && details.extendedIngredients && (
          <ul>
            {details.extendedIngredients.map((ingredients, index) => {
              return <li key={index}>{ingredients.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;