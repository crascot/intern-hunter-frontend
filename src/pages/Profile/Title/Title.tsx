import { testCallback } from '../../..'
import Button from '../../../components/Buttons/Button'
import s from './Title.module.css'
import image from './logo.png'

const Title = () => {
    return (
        <div className={s.title}>
            <div className={s.info}>
                <img src={image} alt='avatar' />
                <span>
                    <h3>Специальность</h3>
                    <h4>От компании Google <span>FULL-TIME</span></h4>
                </span>
            </div>
            <Button callback={testCallback} text='Учавствовать' />
        </div>
    )
}

export default Title