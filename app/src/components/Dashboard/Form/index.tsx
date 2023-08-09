import { useState } from "react";
import { Container } from "./styles";

interface FormProps {
    linkAPI:string;
}

export function Form({linkAPI}:FormProps) {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [classroom, setClassroom] = useState('');

    const handleData = async (event: any) => {
        event.preventDefault()
        console.log('click')
    }
    return (
        <Container action={linkAPI}>
            <div className="inputContainer">
                <label>Primeiro e último nome</label>
                <input placeholder="Ex: Bianca Maciel" onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className="inputContainer">
                <label>Matrícula</label>
                <input placeholder="Ex: 20191011120005" onChange={(e) => setId(e.target.value)} type="number"></input>
            </div>

            <div className="inputContainer">
                <label>Turma</label>
                <input placeholder="Ex: T02" onChange={(e) => setClassroom(e.target.value)}></input>
            </div>

            <div className="inputButton">
                <button onClick={(e) => typeof e} type="submit">Enviar</button>
            </div>
        </Container>
    )
}