const ToDoTag = ({label, tagIndex, tagColor}) => {
    return <div className="toDoTag" style={tagColor}>
        {label} {tagIndex}
    </div>
}

export default ToDoTag; 