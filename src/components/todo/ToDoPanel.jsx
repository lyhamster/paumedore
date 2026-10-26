import { useState } from "react"
import Block from "../common/Block"
import ToDoHeader from "./ToDoHeader"
import ToDoInput from "./ToDoInput"
import ToDoTask from "./ToDoTask"

const ToDoPanel = () => {
    const [taskList, setTaskList] = useState([]);

    return (
    <Block type="border" className="panelColumn toDoPanel toDoListWrapper" color="var(--pinkMainColor)">
        <ToDoHeader/>
        <div className="toDoPanel">
            <Block className="listSection" type="basic" color="white">
                {taskList.length === 15 ? setTaskList([]) : taskList.map((task, index) => {
                    return <ToDoTask key={index} task={task}/>
                })}
            </Block>
            <ToDoInput setTaskList={setTaskList}/>    
        </div>
    </Block>
    )
}

export default ToDoPanel;