import { useState } from 'react'
import s from './DropdownEditProfile.module.css'
import { useEditProfileMutation } from '../../redux/usersAPI';
import Button from '../Buttons/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DropdownEditProfile: React.FC<{ switchOpenState: () => void }> = ({ switchOpenState }) => {
    const navigate = useNavigate();
    const userState = useSelector((state: any) => state.authSlice.user);
    const user = userState?.data;
    const [editProfile] = useEditProfileMutation();
    const [profileData, setProfileData] = useState({})

    const handleAuctionData = (key: string) => (value: string) => {
        setProfileData({ ...profileData, [key]: value })
    }

    const createAuctionFunc = async () => {
        await editProfile({ ...user, ...profileData })
          .then(() => navigate(-1))
          .catch(err => console.log(err))
    }

    return (
        <div className={s.container}>
            <div className={s.dropdown}>
                <span className={s.closeBlock}>
                    <Button callback={switchOpenState} text='X' />
                </span>
                <div className={s.inputs}>
                    <input onChange={(e) => handleAuctionData('first_name')(e.target.value)} placeholder='Имя' type="text" />
                    <input onChange={(e) => handleAuctionData('last_name')(e.target.value)} placeholder='Фамилия' type="text" />
                    <input onChange={(e) => handleAuctionData('location')(e.target.value)} placeholder='Место проживание' type="text" />
                    <input onChange={(e) => handleAuctionData('skills')(e.target.value)} placeholder='Навыки' type="text" />
                    <input onChange={(e) => handleAuctionData('speciality')(e.target.value)} placeholder='Специальность' type="text" />
                </div>
                <Button callback={createAuctionFunc} text='Изменить' />
            </div>
        </div>
    )
}

export default DropdownEditProfile