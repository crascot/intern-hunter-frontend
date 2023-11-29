import Button from '../Buttons/Button'
import s from './AuctionsFilter.module.css'
import { testCallback } from '../..'

const AuctionsFilter = () => {
    return (
        <div className={`${s.filter} shadow`}>
            <label>
                <input
                    type='text'
                    placeholder='Пойск аукционов'
                />
            </label>
            <Button callback={testCallback} text='Найти аукцион' />
        </div>
    )
}

export default AuctionsFilter