import React from 'react'
import s from './Block.module.css'

interface BlockType {
    icon:string,
    count:string,
    text:string
}

const Block:React.FC<BlockType> = ({icon, count, text}) => {
    return (
        <div className={s.block}>
            <div>
                <img src={icon} alt='jobs' />
            </div>
            <span>
                <h3>{count}</h3>
                <p>{text}</p>
            </span>
        </div>
    )
}

export default Block