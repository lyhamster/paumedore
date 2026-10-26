import { useRef, useState } from "react"
import Block from "../common/Block"
import Button from "../common/Button"

const ToDoInput = ({setTaskList}) => {
    const [taskLabel, setTaskLabel] = useState("");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setTaskLabel(e.target.value);
    }

    const handleAddList = (e) => {
        setTaskList(prev => [...prev, taskLabel]);
        setTaskLabel("");
        inputRef.current.focus();
    };    

    return <Block className="todoInputWrapper" type="border" color="white">
        <input ref={inputRef} type="text" name="todoText" placeholder="Ajouter un nouveau todo ..." value={taskLabel} onChange={e => handleChange(e)}/>
        <Button 
            shape="square" 
            color="var(--pinkMainColor)" 
            decoration="+"
            onClick={handleAddList}
        />
    </Block>
}

export default ToDoInput;