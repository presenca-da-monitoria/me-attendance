import { Monitor } from "./Monitor";
import { BackgroundDetails, BackgroundDetails2, Container, Content, Monitorias, TitleContainer } from "./styles";
import { Form } from "./Form";


interface DashboardProps {
    //Functions
    handleSetMonitorAPI: (monitor: string) => void;
    handleSetToggleRenderToForm: () => void;
    handleOpenModal: () => void;

    //handleSetToggleRenderToSelection: () => void;

    //consts
    monitoresNomes: string[];
    monitoresHorarios: string[];
    toggleRender: boolean;
    monitorAPI: string;

}

export function Dashboard({ handleSetToggleRenderToForm, handleSetMonitorAPI, handleOpenModal, monitorAPI, monitoresNomes, monitoresHorarios, toggleRender }: DashboardProps) {

    var render;

    if (toggleRender === true) {
        if (monitoresNomes.length === 0) {
            render = <p style={{ color: "black", marginTop: "1.5rem",fontSize: "2rem" }}>Sem monitoria hoje!</p>
        } else {
            render = <Monitorias>
                {monitoresNomes.map((monitorName, i) => {
                    return (
                        <Monitor
                            monitorName={monitorName}
                            monitorClass={monitoresHorarios[i]}
                            handleSetMonitorAPI={handleSetMonitorAPI}
                            handleSetToggleRenderToForm={handleSetToggleRenderToForm}
                        />
                    )
                })}
            </Monitorias>
        }
    } else if (toggleRender === false) {
        render = <Form
            monitorAPI={monitorAPI}
            handleOpenModal={handleOpenModal}
        />
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