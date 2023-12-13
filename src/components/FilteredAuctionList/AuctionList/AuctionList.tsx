import React from 'react'
import s from './AuctionList.module.css'
import { AuctionType } from '../../../types/auctonType'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const AuctionList: React.FC<AuctionType> = ({ titelname, active, creator, auctionId, end_date }) => {
    const navigate = useNavigate()
    const navigateToAuction = (id: number) => {
        navigate(`/auction/${id}`)
    }

    return (
        <div className={`${s.auctionItem} ${active && s.close}`} onClick={() => navigateToAuction(auctionId)}>
            <h3>
                {
                    active ? 'Аукцион активен' : 'Аукцион еще не начат'
                }
            </h3>
            <h4>{titelname}</h4>
            <span className={s.companyInfo}>
                <h5>Количество участников:  {creator}</h5>
                <h5>Аукцион закончится: {dayjs(end_date).format('DD-MM-YYYY')}</h5>
            </span>
        </div>
    )
}

export default AuctionList