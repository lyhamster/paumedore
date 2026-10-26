import Block from "../common/Block";

const CounterScreen = ({countNb}) => {
    return <Block type="basic" className="counterScreen flexCenter" color="black">
        {countNb}
    </Block>
}

export default CounterScreen;