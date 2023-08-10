import Modal from "react-modal"
import { Container } from "./styled";

interface ModalPopUpProps{
    isOpen: boolean;
}

export function ModalPopUp({isOpen}:ModalPopUpProps) {
    return(
        <Modal
        isOpen={isOpen}
        >
            <Container>
            <h1>{}</h1>
            <button>Retornar</button>
            </Container>

        </Modal>
    )
}