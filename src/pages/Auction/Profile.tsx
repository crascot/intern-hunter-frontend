import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'
import Footer from '../../components/Footer/Footer'
import Title from './Title/Title'
import s from './Profile.module.css'
import Description from './Description/Description'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Profile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate(-1);
    }, [token, navigate])

    if (token) {
        return (
            <>
                <NavbarMenuWrapper current='Профиль' />
                <div className={s.container}>
                    <Title />
                    <Description />
                </div>
                <Footer />
            </>
        )
    } else return <></>
}

export default Profile