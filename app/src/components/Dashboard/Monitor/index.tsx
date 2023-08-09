import { Icon, Monit, MonitorAndHour, MonitorButton } from "./styles";


interface MonitorProps {
    handleSetLinkAPI: (monitor: string) => void;
    monitorName: string;
    handleSetToggleRenderToForm: () => void;
}

export function Monitor({ handleSetLinkAPI, monitorName, handleSetToggleRenderToForm }: MonitorProps) {

    return (

        <Monit>
            <Icon>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.2196C1 17.75 1.21071 18.2587 1.58579 18.6338C1.96086 19.0089 2.46957 19.2196 3 19.2196C5 19.2196 5 15.2196 6 10.2196C7 5.2196 7 1.2196 9 1.2196C9.53043 1.2196 10.0391 1.43032 10.4142 1.80539C10.7893 2.18046 11 2.68917 11 3.2196M3 10.2196H9M13 10.2196L19 16.2196M13 16.2196L19 10.2196" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Icon>

            <MonitorAndHour>
                <p>{monitorName}</p>
                <p>Horário: 35T12</p>
            </MonitorAndHour>

            <MonitorButton onClick={() => { handleSetLinkAPI(monitorName); handleSetToggleRenderToForm()}}>
                Aplicar
            </MonitorButton>
        </Monit>
    )
}