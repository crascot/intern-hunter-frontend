import React from 'react'
import s from './AuctionList.module.css'
import { AuctionType } from '../../../types/auctonType'

const AuctionList: React.FC<AuctionType> = ({ titelname, active, creator }) => (
    <div className={`${s.auctionItem}`}>
        <h4>{titelname}</h4>
        <span>{active}</span>
        <span className={s.companyInfo}>
            <h5>{creator}</h5>
        </span>
    </div>
)

export default AuctionList