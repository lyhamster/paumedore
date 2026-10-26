import Block from "../common/Block";
import CounterScreen from "./CounterScreen";

const Counter = ({label, color, countNb}) => {

    return <Block type="border" color={color} className="flexCenter counterWrapper">
        <CounterScreen countNb={countNb}/>
        <p>{label}</p>
    </Block>
}

export default Counter;