import React from 'react'
import s from './Navigation.module.css';
import { NavigationType } from '../../types/navigationType';

const Navigation: React.FC<NavigationType> = ({ links, current }) => {
    return (
        <div>
            <div className={s.navContainer}>
                <div className={s.nav}>
                    <ul className={s.nav}>
                        {
                            links.map((l, i) => (
                                <li key={i} className={current === l.text ? s.active : ''}>
                                    <a href={l.link}>
                                        {l.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation