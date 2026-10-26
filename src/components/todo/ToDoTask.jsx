import { useContext, useState } from "react";
import Checkbox from "../common/Checkbox";
import { TimerContext } from "../contexts/TimerContext";
import ToDoTag from "./ToDoTag";

const ToDoTask = ({task}) => {
    const COLOR = {
        work: "var(--workColor)",
        short: "var(--pastelYellowColor)",
        long: "var(--pinkMainColor)"
    }
    const [checked, setChecked] = useState(false);
    const {cycleIndex, paumeCycle,  workCounter, shortCounter, longCounter } = useContext(TimerContext);

    const [tagWork, setTagWork] = useState();
    const [tagLabel, setTagLabel] = useState("");
    
    const handleCheck = () => {
        setChecked(true);
        setTagLabel(paumeCycle[cycleIndex.current]);
        setTagWork(() => {
            if (paumeCycle[cycleIndex.current] === "work") {
                return workCounter
            } else if (paumeCycle[cycleIndex.current] === "short") {
                return shortCounter;
            } else if (paumeCycle[cycleIndex.current] === "long") {
                return longCounter;
            }
        }); 
    };

    return <div className="toDoTask">
        <Checkbox state={checked ? "done" : "notDone"} onClick={() => handleCheck()}/>
        <p className={checked ? "todoLabelChecked" : ""}>{task}</p>
        {checked && <ToDoTag label={tagLabel} tagIndex={tagWork} tagColor={tagLabel && {"--tagColor" : COLOR[tagLabel]}}/>}
    </div>
}

export default ToDoTask;