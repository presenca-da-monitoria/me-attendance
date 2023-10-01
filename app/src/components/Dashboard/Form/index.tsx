import { useState } from "react";
import { Container } from "./styles";

interface FormProps {

    //functions
    handleOpenModal: () => void;

    //consts    
    monitorAPI: string;
}

export function Form({ handleOpenModal, monitorAPI }: FormProps) {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [classroom, setClassroom] = useState('');

    const handleData = async (event: any) => {
        event.preventDefault()

        const dateFormat = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short',
        })
        const formatedDate = dateFormat.format(new Date())
        fetch('https://sheetdb.io/api/v1/y28qaf18c7npw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'id': "INCREMENT",
                        'date': formatedDate,
                        'name': name,
                        'matricula': id,
                        'classroom': classroom,
                        'monitor': monitorAPI
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <Container>
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
                <button onClick={(e) => { handleData(e); handleOpenModal() }} type="submit">Enviar</button>
            </div>
        </Container>
    )
}
