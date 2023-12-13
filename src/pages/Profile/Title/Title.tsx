import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'
import { useSignoutMutation } from '../../../redux/formAPI'
import s from './Title.module.css'
import noAvatar from '../../../images/no-avatar.jpg'
import { useSelector } from 'react-redux'

const Title: React.FC<{ switchOpenState: any }> = ({ switchOpenState }) => {
    const token = localStorage.getItem('token');
    const [signout] = useSignoutMutation();
    const navigate = useNavigate();

    const userState = useSelector((state: any) => state.authSlice.user);
    const user = userState?.data;

    const signoutFunc = async () => {
        await signout({ Token: token })
            .then(() => {
                localStorage.removeItem('token');
                navigate(-1);
            })
            .catch((e) => console.log(e))
    }

    if (!userState) return <></>;

    return (
        <div className={s.title}>
            <div className={s.info}>
                <img src={user.avatar || noAvatar} alt='avatar' />
                <span>
                    <h3>{user.username}</h3>
                    <h4>Почта: {user.email}</h4>
                    <h5>Возраст: {user.years_old}</h5>
                </span>
            </div>
            {
                user.role === 'Employer' && <Button callback={switchOpenState} text='Создать аукцион' />
            }
            <Button callback={signoutFunc} text='Выйти' />
        </div>
    )
}

export default Title