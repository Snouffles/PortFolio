

function Button({btnTitle, onClick, className, disabled}) {
    
    return (
    
    <button className={className} disabled={disabled}onClick= {onClick}>
        {btnTitle}
    </button>
    
    )
}

export default Button;