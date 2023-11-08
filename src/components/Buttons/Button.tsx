import React from 'react'
import s from './Buttons.module.css';

interface ButtonType {
    callback: () => void,
    text: string
}

const Button: React.FC<ButtonType> = ({ callback, text }) => (
    <button
        className={s.button}
        onClick={callback}
    >
        {text}
    </button>
)

export default Button