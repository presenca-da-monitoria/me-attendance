import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape:#FFFFFF;
        --green:#33CC95;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }


    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor:pointer;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    :root{
        --blueSite: #1e6bb8;
        --greenSite: #159957;
        --greySite: #606c71;
      }
      
      .container{
        padding: 30px;
        border-radius: 15px;
        background: linear-gradient(0deg, var(--greenSite), var(--blueSite));
      }
      
      .inputContainer{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 20px;
      }
      
      .buttonContainer{
        text-align: center;
      }
      
      h1{
        color: white;
      }
      
      input{
        border: 0px solid;
        height: 50px;
        border-radius: 7px;
        font-size: 20px;
        padding-left: 10px;
        margin-top: 5px;
        color: var(--greySite);
        text-align: center;
      }
      
      label{
        font-size: 22px;
        font-weight: 700;
        color: white
      }
      
      button{
        height: 50px;
        width: 150px;
        font-size: 24px;
        font-weight: 900;
        border-radius: 12px;
        color: var(--greySite);
        border: none;
      }
`