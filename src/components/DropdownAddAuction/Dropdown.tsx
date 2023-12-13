import { useState } from 'react'
import s from './Dropdown.module.css'
import { useCreateAuctionMutation } from '../../redux/usersAPI';
import Button from '../Buttons/Button';

const DropdownAddAutction: React.FC<{ switchOpenState: () => void }> = ({ switchOpenState }) => {
  const [createAuction] = useCreateAuctionMutation();
  const [auctionData, setAuctionData] = useState({})

  const handleAuctionData = (key: string) => (value: string) => {
    setAuctionData({ ...auctionData, [key]: value })
  }

  const createAuctionFunc = async () => {
    await createAuction(auctionData)
      .then(() => alert('Аукцион создан'))
      .catch(err => console.log(err))
  }

  return (
    <div className={s.container}>
      <div className={s.dropdown}>
        <span className={s.closeBlock}>
          <Button callback={switchOpenState} text='X' />
        </span>
        <div className={s.inputs}>
          <input onChange={(e) => handleAuctionData('titelname')(e.target.value)} placeholder='Должность' type="text" />
          <input onChange={(e) => handleAuctionData('task')(e.target.value)} placeholder='Задача' type="text" />
          <input onChange={(e) => handleAuctionData('max_interns')(e.target.value)} placeholder='Максимальное количество участников' type="number" />
          <input onChange={(e) => handleAuctionData('min_interns')(e.target.value)} placeholder='Минимальное количество участников' type="number" />
          <input onChange={(e) => handleAuctionData('end_date')(e.target.value)} placeholder='Минимальное количество участников' type="date" />
        </div>
        <Button callback={createAuctionFunc} text='Создать' />
      </div>
    </div>
  )
}

export default DropdownAddAutction