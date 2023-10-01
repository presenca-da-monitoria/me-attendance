import { Monit, MonitorAndHour, MonitorButton } from "./styles";


interface MonitorProps {
    //Functions
    handleSetMonitorAPI: (monitor: string) => void;
    handleSetToggleRenderToForm: () => void;

    //consts
    monitorName: string;
    monitorClass: string;
    
}

export function Monitor({ handleSetMonitorAPI, handleSetToggleRenderToForm, monitorName, monitorClass  }: MonitorProps) {

    return (

        <Monit>
            
            <MonitorAndHour>
                <p>{monitorName}</p>
                <p>Horário: {monitorClass}</p>
            </MonitorAndHour>

            <MonitorButton onClick={() => { handleSetMonitorAPI(monitorName); handleSetToggleRenderToForm()}}>
                Preencher
            </MonitorButton>
        </Monit>
    )
}