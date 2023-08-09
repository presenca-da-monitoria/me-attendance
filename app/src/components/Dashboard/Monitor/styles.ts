import { styled } from "styled-components";

export const Monitor = styled.div`
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

`