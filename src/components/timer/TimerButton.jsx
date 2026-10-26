import Button from "../common/Button"

const TimerButton = ({label, color, className, onClick, ledOn}) => {
    return <div className="TimerBttn">
        <Button shape="capsule" color={color} className={`${className}`} onClick={onClick}/>
        <div className="timerLabelWrapper flexCenter">
            <div className="ledLight" style={ledOn}></div>
            <p>{label}</p>
        </div>
    </div>
}

export default TimerButton;