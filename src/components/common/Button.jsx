const Button = ({decoration, shape, color, onClick, className, style}) => {
    const SHAPE = {
        square: "bttnBasic",
        capsule: "bttnCapsule",
        round: "bttnRound",
    }
    
    return <button className={`bttn ${SHAPE[shape]} ${className}`} style={{"--bttnBg": color, ...style}} onClick={onClick}>
        {decoration}
    </button>
}
export default Button;