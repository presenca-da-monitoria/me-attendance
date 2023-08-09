import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ModalForm } from "./components/ModalForm";
import { GlobalStyle } from "./styles/global";


export function App() {

  //Esse setLinkAPI vai buscar os dados lá no component Monitor e atualiza ele quando clica-se no botão, o valor 
  // escolhido é usado e enviado ao modal na hora de abrir o component modal (linha 47)
  const [linkAPI, setLinkAPI] = useState('')
  
  function monitorInCharge(){
    const date = new Date().getDay()
    if(date === 1){ //segunda
        return ['Raquel']
      }
      if(date === 2){ //terça
        return ['Pedro', 'Dante']
      }
      if(date === 3){ //quarta
        return ['Raquel', 'Dante', 'Artur']
      }
      if(date === 4){ //quinta
        return ['Artur', 'Pedro']
      }
      if(date === 5){ //sexta
        return ['Exercícios']
      }
      else{
        return ['nada']
      }
  }
  const monitores = monitorInCharge()

  function handleSetLinkApi(monitor: string) {
    if (monitor === 'Paz') {
      setLinkAPI('www.linkdaapi/Paz')
    } else if (monitor === 'Pedro Maneiro') {
      setLinkAPI('www.linkdaapi/pedro-maneiro')
    } else if (monitor === 'Raquel') {
      setLinkAPI('www.linkdaapi/Raquel')
    }
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }


  return (
    <>
      <Dashboard
        handleOpenModal={handleOpenModal}
        monitores={monitores}
        handleSetLinkAPI={handleSetLinkApi}
      />
      <ModalForm
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        linkAPI={linkAPI}
      />
      <GlobalStyle />
    </>
  );
}