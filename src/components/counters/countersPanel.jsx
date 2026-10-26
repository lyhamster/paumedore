import { useContext } from "react";
import Block from "../common/Block";
import Counter from "./Counter";
import { TimerContext } from "../contexts/TimerContext";

const CountersPanel = () => {
    const { workCounter, shortCounter, longCounter } = useContext(TimerContext); 

    return <Block type="border" color="var(--greyMainColor)" className="counterPanel"> 
        <Counter countNb={workCounter} className="test" label="work" color="var(--workColor)"/>
        <Counter countNb={shortCounter} className="test" label="short" color="var(--pastelYellowColor)"/>
        <Counter countNb={longCounter} className="test" label="long" color="var(--pinkMainColor)"/>
    </Block>
}

export default CountersPanel;