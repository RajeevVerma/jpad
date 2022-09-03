
const EventComponent: React.FC = () => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Getting dragged');
    }

    return <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>Drag</div>
    </div>
}

export default EventComponent;
