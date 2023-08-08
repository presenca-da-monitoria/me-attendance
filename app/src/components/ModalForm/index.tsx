import { Container } from "./styles";
import Modal from 'react-modal';
import { useState } from "react";

interface modalFormProps {
    isOpen: boolean;
    onRequestClose: () => void;
    linkAPI: string;
}

interface inputData {
    name: string,
    id: string,
    classroom: string
}

export function ModalForm({ isOpen, onRequestClose, linkAPI }: modalFormProps) {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [classroom, setClassroom] = useState('');

    const handleData = async (event: any) => {
        event.preventDefault()
        console.log('click')
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Attendance form"
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >
                <Container action={linkAPI}>
                    <h1>Presença da monitoria</h1>


                    <input placeholder="Nome completo" onChange={(e) => setName(e.target.value)}></input>



                    <input placeholder="Matrícula" type="number"onChange={(e) => setId(e.target.value)}></input>



                    <input placeholder="Turma" onChange={(e) => setClassroom(e.target.value)}></input>


                    <button onClick={(e) => typeof e} type="submit">Enviar</button>

                </Container>

            </Modal>

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