
interface MonitorProps {
    handleOpenModal: () => void;
    monitorName: string;
}

export function Monitor({handleOpenModal,monitorName}: MonitorProps) {
    return (
        <div>
            <button onClick={handleOpenModal}>{monitorName}</button>
        </div>

    )
}