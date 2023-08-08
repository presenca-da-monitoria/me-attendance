import { link } from "fs";
import { Container } from "./styles";
import Modal from 'react-modal';
interface modalFormProps {
    isOpen: boolean;
    onRequestClose: () => void;
    linkAPI: string;
}

export function ModalForm({ isOpen, onRequestClose,linkAPI }: modalFormProps) {


    return (
        <>
            <Container>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={onRequestClose}
                    contentLabel="Attendance form"
                >
                    <form  action={linkAPI}>
                        <h1>Presença da monitoria</h1>
                            <div className="inputContainer">
                                <label>Nome</label>
                                <input placeholder="Ex: Gabriel Carvalho"></input>
                            </div>
                            <div className="inputContainer">
                                <label>Matricula</label>
                                <input placeholder="Ex: 20191011120005" type="number"></input>
                            </div>
                            <div className="inputContainer">
                                <label>Turma</label>
                                <input placeholder="Ex: T02"></input>
                            </div>
                            
                                <button onClick={()=>{alert(linkAPI)}}>Enviar</button>
                            
                    </form>

                </Modal>
            </Container>
        </>
    )
}


/* <form className="container" action="">
                    <h1>Presença da monitoria</h1>
                    <div className="divContainer">
                    <div className="inputContainer">
                        <label>Nome</label>
                        <input placeholder="Ex: Gabriel Carvalho"></input>
                    </div>
                    <div className="inputContainer">
                        <label>Matricula</label>
                        <input placeholder="Ex: 20191011120005" type="number"></input>
                    </div>
                    <div className="inputContainer">
                        <label>Turma</label>
                        <input placeholder="Ex: T02"></input>
                    </div>
                    <div className="buttonContainer">
                        <button>Enviar</button>
                    </div>
                    </div>
                </form>*/