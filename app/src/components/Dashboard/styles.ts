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
    max-width: fit-content;
    height: 100%;
    max-height: 350px;
    border-radius: 0.25rem;
    background-color: #15717E;
    padding: 1.5rem 1rem 12rem;
    text-align: center;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--greenSite);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        width: 8rem;

        transition: filter 0.2s;

        &:hover { 
            filter: brightness(0.9);
        }
    }

    h1 {
        margin-bottom: 0.5rem;
    }
    h2 {
        margin-bottom: 4rem;
    }
`

export const Monitorias = styled.div`
    display: flex;
    justify-content: space-around;
    

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