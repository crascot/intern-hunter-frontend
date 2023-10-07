import React from 'react'
import s from './Button.module.css';

interface ButtonType {
    callback: () => void,
    text: string
}

const Button: React.FC<ButtonType> = ({ callback, text }) => {
    return (
        <button
            className={s.button}
            onClick={callback}
        >
            {text}
        </button>
    )
}

export default Button