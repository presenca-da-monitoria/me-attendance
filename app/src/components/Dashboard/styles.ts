import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

export const Content = styled.div`
    width: 100%;
    max-width: 576px;
    background: white;
    height: 100%;
    max-height: 690px;
    position:relative;
    border-radius: 0.25rem;
    padding: 3rem;
    text-align: center;
    margin:1rem;


    hr{
      margin-top: 2rem;
      background-color: black;
    }

  .inputContainer{
      margin-top: 1.5rem;
    }
`


export const TitleContainer = styled.div`
  padding: 1rem;
  background: linear-gradient(to right, #509ca7, #22717e);
  text-align: left;
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


`



export const Monitorias = styled.div`
    display: flex;
    justify-content: space-around;
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
    

    div {
        padding: 1rem 0.5rem;
        border-radius: 0.25rem;
    }
    

`

/*width:100%;
    max-width: 800px;
    height:100%;
    max-height: 360px;
    margin:0 auto;
    background:#f7f7f7;
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-400px;
    margin-top:-180px;

    */