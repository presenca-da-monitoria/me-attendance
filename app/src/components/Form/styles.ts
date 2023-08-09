import { styled } from "styled-components";

export const Container = styled.form`
  
  .titleContainer {
    padding: 1rem;
    background: linear-gradient(to right, #509ca7, #22717e);
  }
  
  h1{
    color: white;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h2{
    color: white;
    font-size: 14px;
    text-transform: uppercase;
  }
  
  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: none;
    background: #e7e9ee;

    font-size: 1rem;
    font-weight: 400;

    &+ input{
      margin-top: 1rem;
    }
  }

  label{
    font-size: 14px;
    font-weight: 700;
  }

  button[type="submit"] {
      color: #e7e9ee;
      width: 40%;
      padding: 0 1.5rem;
      margin-top: 1.5rem;
      height: 4rem;
      background: #22717e;
      border-radius: 0.25rem;
      border:0;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 950;
      transition: filter 0.2;

      &:hover{
        filter:brightness(0.9)
      }
    }

    .inputContainer{
      margin-top: 1.5rem;
    }

    .inputButton{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    hr{
      margin-top: 2rem;
      background-color: black;
    }
`