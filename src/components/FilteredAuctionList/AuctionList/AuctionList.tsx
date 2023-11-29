import React from 'react'
import s from './AuctionList.module.css'

type AuctionListType = {
    title: string,
    minSalary: number,
    maxSalary: number,
    avatar: string,
    nameCompany: string
}

const AuctionList: React.FC<AuctionListType> = ({ title, minSalary, maxSalary, avatar, nameCompany }) => (
    <div className={`${s.auctionItem}`}>
        <h4>{title}</h4>
        <span>Оплата: {minSalary}сом - {maxSalary}сом</span>
        <span className={s.companyInfo}>
            <img src={avatar} alt='avatar company' />
            <h5>{nameCompany}</h5>
        </span>
    </div>
)

export default AuctionList