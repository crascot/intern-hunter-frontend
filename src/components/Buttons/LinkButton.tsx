import React from 'react'
import { Link, To } from 'react-router-dom'
import s from './Buttons.module.css'

type LinkButtonType = {
    link: To,
    text: string
}

const LinkButton: React.FC<LinkButtonType> = ({ link, text }) => (
    <Link
        to={link}
        className={s.button}
    >
        {text}
    </Link>
)

export default LinkButton