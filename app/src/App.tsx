import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { monitorInCharge } from "./features/monitorInCharge"
import { monitorsSchedule } from "./features/monitorsSchedule";
import ModalPopUp from "./components/ModalPopUp";



export function App() {

  var render = <></>

  //useState para controlar a renderização de components
  const [toggleRender, setToggleRender] = useState(true);

  function handleSetToggleRenderToSelection() {
    setToggleRender(true)
  }

  function handleSetToggleRenderToForm() {
    setToggleRender(false)
  }

  //Esse setMonitorAPI vai buscar os dados lá no component Monitor e atualiza ele quando clica-se no botão, o valor 
  // escolhido é usado e enviado ao modal na hora de abrir o component modal (linha 47)
  const [monitorAPI, setMonitorAPI] = useState('')

  //lembrar de dar um .toLowerCase() quando importar o nome do monitor do array de monitorsSchedule
  function handleSetMonitorAPI(monitor: string) {
    type MonitorMappingType = {
      [key: string]: string;
    };
    
    const monitorMapping: MonitorMappingType = {
      'Paz': 'Paz',
      'Pedro': 'Pedro-Maneiro',
      'Raquel': 'Raquel',
      'Arthur': 'Arthur',
      'Dante': 'Dante',
      'Exercicios': 'Exercicios'
    };
    
    if (monitor in monitorMapping) {
      setMonitorAPI(monitorMapping[monitor]);
    } else {
      // Lidere com o caso em que 'monitor' não corresponda a nenhum valor conhecido, se necessário.
    }
    
  }

  let monitores = monitorInCharge(monitorsSchedule) //recebe o array de objetos referente aos monitores do dia
  let monitoresNomes = [] //recebe um array dos nomes dos monitores
  let monitoresHorarios = [] //recebe um array com os horários dos monitores

  for (let i = 0; i < monitores.length; i++) {
    monitoresNomes.push(monitores[i].nome)
    monitoresHorarios.push(monitores[i].horario)
  }


  const [isModalPopUpOpen, setIsModalPopUpOpen] = useState(false)

  function handleOpenModalPopUp() {
    setIsModalPopUpOpen(true)
  }

  function handleCloseModalPopUp() {
    setIsModalPopUpOpen(false)
  }

  if (isModalPopUpOpen) {
    render =
      <ModalPopUp
        onReturn={handleCloseModalPopUp}
        returnToSelection={handleSetToggleRenderToSelection}
      />;
  } else {
    render = <></>
  }

  return (
    <>
      <Dashboard
        handleSetMonitorAPI={handleSetMonitorAPI}
        handleSetToggleRenderToForm={handleSetToggleRenderToForm}
        handleOpenModal={handleOpenModalPopUp}

        monitoresNomes={monitoresNomes}
        monitoresHorarios={monitoresHorarios}
        toggleRender={toggleRender}
        monitorAPI={monitorAPI}

      />
      {render}
      <GlobalStyle />
    </>
  );
}

