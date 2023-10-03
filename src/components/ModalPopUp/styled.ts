import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 512px;
  max-height: 100%;
  max-width: 100%;
  height: 256px;
  border: 1px solid #ddd;
  margin: auto;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0; /* Isso centralizará o componente no meio da tela */
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const SuccessMessageText = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const ReturnButton = styled.button`

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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  // Isso vai criar um fundo preto com 50% de transparência
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  // Garante que o overlay e a mensagem aparecerão acima de outros elementos
`;
