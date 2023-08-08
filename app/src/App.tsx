import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ModalForm } from "./components/ModalForm";
import { GlobalStyle } from "./styles/global";



export function App() {

  const monitores = ['Paz', 'Pedro Maneiro', 'Raquel']

  const [linkAPI, setLinkAPI] = useState('')

  function handleSetLinkApi(monitor: string) {
    if (monitor == 'Paz') {
      setLinkAPI('www.linkdaapi/Paz')
    } else if (monitor == 'Pedro Maneiro') {
      setLinkAPI('www.linkdaapi/pedro-maneiro')
    } else if (monitor == 'Raquel') {
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