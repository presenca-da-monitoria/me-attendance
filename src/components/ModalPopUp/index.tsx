import React from 'react';
import { SuccessContainer, SuccessMessageText, ReturnButton, Overlay } from './styled';

interface Props {
    onReturn: () => void;
    returnToSelection: () => void
}

const ModalPopUp: React.FC<Props> = ({ onReturn, returnToSelection }) => {
    return (
        <Overlay>
            <SuccessContainer>
                <SuccessMessageText>Presença cadastrada com sucesso</SuccessMessageText>
                <ReturnButton onClick={() => { onReturn(); returnToSelection() }}>Retornar</ReturnButton>
            </SuccessContainer>
        </Overlay>
    );
}

export default ModalPopUp;



/*import Modal from "react-modal";
import { Container, Message, Error, ReturnButton } from "./styled";

interface ModalPopUpProps {
    returnToSelection: () => void;
    closeModalPopUp: () => void;
    isOpen: boolean;
    isSend: boolean;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
    },
};

Modal.setAppElement('#root');

export function ModalPopUp({ returnToSelection, closeModalPopUp, isOpen, isSend }: ModalPopUpProps) {
    return (

        <Modal
            isOpen={isOpen}
            style={customStyles}
        >
            <Container>
                {isSend ? (
                    <Message>Presença cadastrada com sucesso!</Message>
                ) : (
                    <Error>Presença inválida, tente novamente.</Error>
                )}
                <ReturnButton onClick={() => { returnToSelection(); closeModalPopUp(); }}>Retornar</ReturnButton>
            </Container>
        </Modal>

    );
}
*/