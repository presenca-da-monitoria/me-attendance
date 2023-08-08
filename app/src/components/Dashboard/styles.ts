import { styled } from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
    border-radius: 1rem;
    width:800px;
    height:360px;
    margin:0 auto;
    background:#f7f7f7;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-400px;
    margin-top:-180px;
    background-color: #15717E;
    padding: 1.5rem 1rem 12rem;
    text-align: center;
    justify-content: space-between;

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
        margin-bottom: 0.5;
    }
    h2 {
        margin-bottom: 4rem;
    }
`

export const Monitorias = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3,1fr);
    div {
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        
        
    }
    

`