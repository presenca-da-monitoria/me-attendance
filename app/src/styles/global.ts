import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blueSite: #1e6bb8;
        --greenSite: #159957;
        --greySite: #606c71;

    }

    *{
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
        background: linear-gradient(to right, #509ca7, #22717e);
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
        color: #DADFF7;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
      
    
    .react-modal-overlay{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: white;
        padding: 3rem;
        position:relative;
        border-radius: 0.25rem;
    }
`