import Modal from "react-modal"
import { Container } from "./styled";

interface ModalPopUpProps{

    returnToSelection: () => void;
    closeModalPopUp: () => void;

    isOpen: boolean;
    isSend: boolean;

}

Modal.setAppElement('#root')

export function ModalPopUp({returnToSelection, closeModalPopUp, isOpen, isSend}:ModalPopUpProps) {

    var modalOutput;

    if (isSend) {
        modalOutput = <>
            <h1>Presença cadastrada com sucesso!</h1>
        </>
    } else {
        <h1>Presença inválida, tente novamente.</h1>
    }


    return(
        <Modal
        isOpen={isOpen}
        
        >
            <Container>
            {modalOutput}
            <button onClick={() => {returnToSelection();closeModalPopUp()}}>Retornar</button>
            </Container>
        </Modal>
    )
}