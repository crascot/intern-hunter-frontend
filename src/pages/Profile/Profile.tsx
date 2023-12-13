import { useState } from 'react'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'
import Title from './Title/Title'
import s from './Profile.module.css'
import Description from './Description/Description'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import DropdownAddAutction from '../../components/DropdownAddAuction/Dropdown'
import DropdownEditProfile from '../../components/DropdownEditProfile/DropdownEditProfile'

const Profile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [isOpenAuction, setIsOpenAuction] = useState(false);
    const switchOpenAuctionState = () => setIsOpenAuction(!isOpenAuction);

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const switchOpenProfileState = () => setIsOpenProfile(!isOpenProfile);

    useEffect(() => {
        if (!token) navigate(-1);
    }, [token, navigate])

    if (token) {
        return (
            <>
                {
                    isOpenAuction || isOpenProfile ?
                        isOpenAuction ?
                            <DropdownAddAutction switchOpenState={switchOpenAuctionState} />
                            :
                            <DropdownEditProfile switchOpenState={switchOpenProfileState} />
                        :
                        <div className={s.profile}>
                            <NavbarMenuWrapper current='Профиль' />
                            <div className={s.container}>
                                <Title switchOpenState={switchOpenAuctionState} />
                                <Description switchOpenState={switchOpenProfileState} />
                            </div>
                        </div>
                }
            </>
        )
    } else return <></>
}

export default Profile