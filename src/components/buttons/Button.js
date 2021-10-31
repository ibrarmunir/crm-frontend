import React from 'react'
import Btn from 'react-bootstrap/Button'

const Button = ({ type = "button", variant = "primary", size = "sm", block = false, children}) => {
    return (
        <Btn type={type} variant={variant} size={size} block={block}>
            {children}
        </Btn>
    )
}

export default Button
