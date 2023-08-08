import { Monitor } from "./Monitor";
import { Container, Content, Monitorias } from "./styles";


interface DashboardProps {
    handleOpenModal: () => void;
    monitores: string[];
    handleSetLinkAPI: (monitor: string) => void;


}

export function Dashboard({ handleOpenModal, monitores, handleSetLinkAPI }: DashboardProps) {


    return (
        <Container>
            <Content>
                <h1>Presença de monitoria</h1>
                <h2>Matemática elementar</h2>
                <div>
                    <h1>Monitorias disponíveis:</h1>
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