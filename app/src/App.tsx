import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
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
    } else if (monitor === 'Pedro') {
      setLinkAPI('www.linkdaapi/pedro-maneiro')
    } else if (monitor === 'Raquel') {
      setLinkAPI('www.linkdaapi/Raquel')
    } else if (monitor === 'Arthur') {
      setLinkAPI('www.linkdaapi/Arthur')
    } else if (monitor === 'Dante') {
      setLinkAPI('www.linkdaapi/Dante')
    } else if (monitor === 'Exercicios') {
      setLinkAPI('www.linkdaapi/Exercicios')
    } 
  }

  let monitores = monitorInCharge(monitorsSchedule)
  let monitoresNomes = []
  let monitoresHorarios = []

  for (let i=0; i < monitores.length; i++){
    monitoresNomes.push(monitores[i].nome)
    monitoresHorarios.push(monitores[i].horario)
  }



  return (
    <>
      <Dashboard
        monitoresNomes={monitoresNomes}
        monitoresHorarios={monitoresHorarios}
        handleSetLinkAPI={handleSetLinkApi}
        handleSetToggleRenderToSelection={handleSetToggleRenderToSelection}
        handleSetToggleRenderToForm={handleSetToggleRenderToForm}
        toggleRender={toggleRender}
        linkAPI={linkAPI}
      />
      
      <GlobalStyle />
    </>
  );
}

