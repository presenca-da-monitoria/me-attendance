import { Icon, Monit, MonitorAndHour, MonitorButton } from "./styles";


interface MonitorProps {
    handleSetLinkAPI: (monitor: string) => void;
    monitorName: string;
    monitorClass: string;
    handleSetToggleRenderToForm: () => void;
}

export function Monitor({ handleSetLinkAPI, monitorName, monitorClass, handleSetToggleRenderToForm }: MonitorProps) {

    return (

        <Monit>
            
            <MonitorAndHour>
                <p>{monitorName}</p>
                <p>Horário: {monitorClass}</p>
            </MonitorAndHour>

            <MonitorButton onClick={() => { handleSetLinkAPI(monitorName); handleSetToggleRenderToForm()}}>
                Preencher
            </MonitorButton>
        </Monit>
    )
}