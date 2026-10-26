const TYPES_CLASSES = {
    basic: "blockBasic",
    flat: "blockFlat",
    border: "blockBorder",
    noBorder: "blockNoBorder",
    noShadow: "blockNoShadow"
}

const Block = ({children, type, className, color}) => {
    return <div className={`block ${TYPES_CLASSES[type]} ${className}`} style={{"--blockBg": color}}>
        {children}
    </div>
}

export default Block;