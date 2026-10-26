import Button from "../common/Button";

const TimerDecoration = () => {
    return <div className="timerDecoration">
        <Button className="capsuleDecoration" style={{"--capsulePosition": "0px"}} color="black" onClick={null} />
        <Button className="capsuleDecoration" style={{"--capsulePosition": "51px"}} color="black" onClick={null} />
        <Button className="capsuleDecoration" style={{"--capsulePosition": "102px"}} color="black" onClick={null} />
    </div>
}

export default TimerDecoration;
