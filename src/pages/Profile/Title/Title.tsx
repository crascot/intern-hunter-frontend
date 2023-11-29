import s from './Title.module.css'
import image from './logo.png'

const Title = () => {
    return (
        <div className={s.title}>
            <img src={image} alt='avatar' />
            <span>
                <h3>Специальность</h3>
                <h4>От компании Google</h4>
            </span>
        </div>
    )
}

export default Title