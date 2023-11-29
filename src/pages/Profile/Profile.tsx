import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'
import Footer from '../../components/Footer/Footer'
import Title from './Title/Title'
import s from './Profile.module.css'
import Description from './Description/Description'

const Profile = () => {
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
}

export default Profile