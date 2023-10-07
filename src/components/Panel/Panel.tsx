import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as Dropdown } from '../../icons/dropdown.svg'
import s from './Panel.module.css'
import Button from '../Button/Button'
import { testCallback } from '../..'
import { useAppSelector } from '../../redux/hooks'

const Panel = () => {
    const current = useAppSelector(state => state.countryFilter.currentCountry)

    return (
        <div className={s.panel}>
            <div>
                <span className={s.logo}>
                    <Logo />
                    <h3>{'Jobpilot'}</h3>
                </span>
                <span className={s.filter}>
                    <button>
                        <img src={current.flag} alt='flag' />
                        {current.country}
                        <Dropdown />
                    </button>
                    <label>
                        <input
                            type='text'
                            placeholder='Job tittle, keyword, company'
                        />
                    </label>
                </span>
            </div>
            <div className={s.buttons}>
                <Button callback={testCallback} text='Sign in' />
                <Button callback={testCallback} text='Post a Jobs' />
            </div>
        </div>
    )
}

export default Panel