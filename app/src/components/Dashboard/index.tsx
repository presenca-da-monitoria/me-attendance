import { Monitor } from "./Monitor";
import { Container, Content, Monitorias } from "./styles";


interface DashboardProps {
    handleOpenModal: () => void;
    monitores: string[];

}

export function Dashboard({ handleOpenModal, monitores }: DashboardProps) {


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
                                />
                            )
                        })}

                    </Monitorias>
                </div>

            </Content>
        </Container>
    )
}