const STATE_COLORS = {
    notDone: "var(--workColor)",
    done: "var(--pinkMainColor)"
}

const Checkbox = ({state, onClick}) => {
    return <div className="checkboxContainer">
        <input type="checkbox" />
        <span onClick={onClick} className="todoCheckbox" style={{"--checkBoxbg": `${STATE_COLORS[state]}`}}></span>
    </div>
}

export default Checkbox;