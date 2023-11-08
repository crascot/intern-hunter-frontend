import React from 'react'
import s from './Navigation.module.css';
import { ReactComponent as Phone } from "../../icons/phone.svg";
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
                    <span className={s.tools}>
                        <Phone />
                        <p>{'+1-202-555-0178'}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navigation