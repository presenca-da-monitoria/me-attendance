import { styled } from "styled-components";



export const Monit = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #F2F2F2;
    margin-top: 2rem;
    height: 6rem;
    border-radius: 0.25rem;
`

export const Icon = styled.div``

export const MonitorAndHour = styled.div`
    h4 {
        color: black;
    }
    p{
        color: black;
        text-align: left;
    }

    

`




export const MonitorButton = styled.button`

    font-size: 1rem;
    color: #fff;
    background: #15717E;
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    width: 8rem;
    transition: filter 0.2s;

    &:hover { 
        filter: brightness(0.9);
    }`