import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ModalForm } from "./components/Form";
import { GlobalStyle } from "./styles/global";
import { monitorsSchedule, monitorInCharge } from "./monitorSchedule"

export function App() {

  const [toggleRender, setToggleRender] = useState(true);

  function handleSetToggleRenderToSelection() {
    setToggleRender(true)
  }

  function handleSetToggleRenderToForm() {
    setToggleRender(false)
  }

  //Esse setLinkAPI vai buscar os dados lá no component Monitor e atualiza ele quando clica-se no botão, o valor 
  // escolhido é usado e enviado ao modal na hora de abrir o component modal (linha 47)
  const [linkAPI, setLinkAPI] = useState('')

  function handleSetLinkApi(monitor: string) {
    if (monitor === 'Paz') {
      setLinkAPI('www.linkdaapi/Paz')
    } else if (monitor === 'Pedro Maneiro') {
      setLinkAPI('www.linkdaapi/pedro-maneiro')
    } else if (monitor === 'Raquel') {
      setLinkAPI('www.linkdaapi/Raquel')
    }
  }

  let monitores = monitorInCharge(monitorsSchedule)
  let monitoresNomes = []
  let monitoresHorarios = []

  for (let i=0; i < monitores.length; i++){
    monitoresNomes.push(monitores[i].nome)
    monitoresHorarios.push(monitores[i].horario)
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
        monitores={monitoresNomes}
        handleSetLinkAPI={handleSetLinkApi}
        handleSetToggleRenderToSelection={handleSetToggleRenderToSelection}
        handleSetToggleRenderToForm={handleSetToggleRenderToForm}
        toggleRender={toggleRender}
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