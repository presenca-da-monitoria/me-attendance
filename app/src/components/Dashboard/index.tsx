import { Monitor } from "./Monitor";
import { Container, Content, Monitorias, TitleContainer } from "./styles";


interface DashboardProps {
    handleOpenModal: () => void;
    monitores: string[];
    handleSetLinkAPI: (monitor: string) => void;


}

export function Dashboard({ handleOpenModal, monitores, handleSetLinkAPI }: DashboardProps) {

    return (
        <Container>
            <Content>
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
        </Container>
    )
}