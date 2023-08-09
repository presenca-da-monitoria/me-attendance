

interface MonitorProps {
    handleOpenModal: () => void;
    handleSetLinkAPI: (monitor:string) => void;
    monitorName: string;
}

export function Monitor({handleOpenModal,monitorName, handleSetLinkAPI}: MonitorProps) {

    return (
        <div>
            <button onClick={() => { handleOpenModal(); handleSetLinkAPI(monitorName);}}>{monitorName}</button>
        </div>
    )
}