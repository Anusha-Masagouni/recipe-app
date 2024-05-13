import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
    box-shadow: 0px 6px 10px 0px #3b3a3a;
    border-radius: 1rem;
  }

  input {
    border: none;
    background: linear-gradient(25deg, #B3C8CF, #00e3ff, #B3C8CF);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    // outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        {/* <p>{input}</p> */}
      </div>
    </FormStyle>
  );
};

export default Search;
