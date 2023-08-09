import { useState } from "react";
import { Monitor } from "./Monitor";
import { BackgroundDetails, BackgroundDetails2, Container, Content, Formis, Monitorias, TitleContainer } from "./styles";
import { Form } from "./Form";


interface DashboardProps {
    handleOpenModal: () => void;
    handleSetLinkAPI: (monitor: string) => void;
    handleSetToggleRenderToSelection: () => void;
    handleSetToggleRenderToForm: () => void;

    monitoresNomes: string[];
    monitoresHorarios: string[];
    toggleRender: boolean;

}

interface inputData {
    name: string,
    id: string,
    classroom: string
}

export function Dashboard({ handleOpenModal, handleSetLinkAPI, monitoresNomes, monitoresHorarios, handleSetToggleRenderToSelection, handleSetToggleRenderToForm, toggleRender }: DashboardProps) {

    var render;

    if (toggleRender === true) {
        render = <Monitorias>
            {monitoresNomes.map((monitorName, i) => {
                return (
                    <Monitor
                        handleOpenModal={handleOpenModal}
                        monitorName={monitorName}
                        monitorClass={monitoresHorarios[i]}
                        handleSetLinkAPI={handleSetLinkAPI}
                        handleSetToggleRenderToForm={handleSetToggleRenderToForm}
                    />
                )
            })}
        </Monitorias>
    } else if (toggleRender === false) {
        render = <Form />
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
                {render}
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