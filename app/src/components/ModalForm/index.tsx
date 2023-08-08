import { Container } from "./styles";

export function ModalForm(){
    return(
        <>
            <Container>
                <form className="container" action="">
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
                </form>
            </Container>
        </>
    )
}