import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'
import { useSignoutMutation } from '../../../redux/formAPI'
import s from './Title.module.css'
import image from './logo.png'
import { useSelector } from 'react-redux'

const Title = () => {
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
                <img src={image} alt='avatar' />
                <span>
                    <h3>{user.username}</h3>
                    <h4>От компании Google <span>FULL-TIME</span></h4>
                </span>
            </div>
            <Button callback={signoutFunc} text='Выйти' />
        </div>
    )
}

export default Title