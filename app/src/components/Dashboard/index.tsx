import { useState } from "react";
import { Monitor } from "./Monitor";
import { BackgroundDetails, BackgroundDetails2, Container, Content, Form, Monitorias, TitleContainer } from "./styles";


interface DashboardProps {
    handleOpenModal: () => void;
    handleSetLinkAPI: (monitor: string) => void;
    handleSetToggleRenderToSelection: () => void;
    handleSetToggleRenderToForm: () => void;

    monitores: string[];
    toggleRender: boolean;

}

interface inputData {
    name: string,
    id: string,
    classroom: string
}

export function Dashboard({ handleOpenModal, handleSetLinkAPI, monitores, handleSetToggleRenderToSelection, handleSetToggleRenderToForm, toggleRender }: DashboardProps) {
    
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [classroom, setClassroom] = useState('');

    const handleData = async (event: any) => {
        event.preventDefault()
        console.log('click')
    }

    var render;

    if (toggleRender === true) {
        render = <Monitorias>
            {monitores.map((monitor) => {
                return (
                    <Monitor
                        handleOpenModal={handleOpenModal}
                        monitorName={monitor}
                        handleSetLinkAPI={handleSetLinkAPI}
                        handleSetToggleRenderToForm={handleSetToggleRenderToForm}
                    />
                )
            })}
        </Monitorias>
    } else if (toggleRender === false) {
        render = <Form>
                    <div className="inputContainer">
                        <label>Primeiro e último nome</label>
                        <input placeholder="Ex: Bianca Maciel" onChange={(e) => setName(e.target.value)}></input>
                    </div>



                    <div className="inputContainer">
                        <label>Matrícula</label>
                        <input placeholder="Ex: 20191011120005" onChange={(e) => setId(e.target.value)}></input>
                    </div>



                    <div className="inputContainer">
                        <label>Turma</label>
                        <input placeholder="Ex: T02" onChange={(e) => setClassroom(e.target.value)}></input>
                    </div>


                    <div className="inputButton">
                        <button onClick={(e) => typeof e} type="submit">Enviar</button>
                    </div>
        </Form>
    }


    return (

        <Container>
            <BackgroundDetails2 />
            <BackgroundDetails />

            <Content>
                <TitleContainer>
                    <h1>Presença da monitoria</h1>
                    <h2>Matemática Elementar</h2>
                </TitleContainer>

                <hr />

                <div>
                    {render}
                </div>
            </Content>

        </Container>
    )
}


/*<Content>
                <TitleContainer>
                    <h1>Presença da monitoria</h1>
                    <h2>Matemática Elementar</h2>
                </TitleContainer>

                <hr />
                
                <div>
                    <Monitorias>
                        {monitores.map((monitor) => {
                            return (
                                <Monitor
                                    handleOpenModal={handleOpenModal}
                                    monitorName={monitor}
                                    handleSetLinkAPI={handleSetLinkAPI}
                                />
                            )
                        })}
                    </Monitorias>
                </div>
            </Content>
*/