import {  Icon, Monit, MonitorAndHour, MonitorButton } from "./styles";


interface MonitorProps {
    handleOpenModal: () => void;
    handleSetLinkAPI: (monitor:string) => void;
    monitorName: string;
}

export function Monitor({handleOpenModal,handleSetLinkAPI,monitorName }: MonitorProps) {

    return (
        
            <Monit>
            <div>
                <img src="./Fx.png" alt="aa" />
            </div>

            <MonitorAndHour>
                {monitorName}
                <p>Horário: 35T12</p>
            </MonitorAndHour>

            <MonitorButton onClick={() => { handleOpenModal(); handleSetLinkAPI(monitorName);}}>
                Aplicar
                </MonitorButton>
        </Monit>
    )
}