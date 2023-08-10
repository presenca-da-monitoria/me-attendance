import { Icon, Monit, MonitorAndHour, MonitorButton } from "./styles";


interface MonitorProps {
    //Functions
    handleSetLinkAPI: (monitor: string) => void;
    handleSetToggleRenderToForm: () => void;

    //consts
    monitorName: string;
    monitorClass: string;
    
}

export function Monitor({ handleSetLinkAPI, handleSetToggleRenderToForm, monitorName, monitorClass  }: MonitorProps) {

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