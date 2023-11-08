import React from 'react'
import s from './Card.module.css'
import { CardType } from '../../../../types/cardType'

const Card: React.FC<CardType> = ({ img, title, text }) => {
  return (
    <li className={s.card}>
      <div>
        <img src={img} alt='how work img' />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default Card