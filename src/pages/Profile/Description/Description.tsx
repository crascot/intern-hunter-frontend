import React from 'react'
import dayjs from 'dayjs';
import s from './Description.module.css'
import { useSelector } from 'react-redux';
import Button from '../../../components/Buttons/Button';

const Description: React.FC<{ switchOpenState: any }> = ({ switchOpenState }) => {
  const userState = useSelector((state: any) => state.authSlice.user);
  const user = userState?.data;

  if (!userState) return <></>;

  return (
    <div className={s.container}>
      <div className={s.info}>
        <Button callback={switchOpenState} text='Редактировать профиль' />
        {
          user.first_name && user.last_name &&
          <div>
            <h3>О себе</h3>
            <h4>{user.first_name} {user.last_name}</h4>
          </div>
        }
        {
          user.skills &&
          <div>
            <h3>Знания</h3>
            {user.skills}
          </div>
        }
        <div>
          <h3>Был в сети</h3>
          {dayjs(user.last_login).format('DD-MM-YYYY')}
        </div>
      </div>
    </div>
  )
}

export default Description