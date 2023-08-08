import { styled } from "styled-components";

export const Container = styled.form`

  input{
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;
    font-weight: 400;

    &+ input{
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
      color: #e7e9ee;
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: #DDA448;
      border-radius: 0.25rem;
      border:0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: bold;
      transition: filter 0.2;

      &:hover{
        filter:brightness(0.9)
      }
    }

`