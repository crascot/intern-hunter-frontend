import React from 'react'
import s from './Navigation.module.css';
import { ReactComponent as Phone } from "../../icons/phone.svg";
import { ReactComponent as USA } from "../../icons//countries/usa.svg";
import { ReactComponent as DropdownIcon } from "../../icons/dropdown.svg";
import { NavigationType } from '../../types/navigationType';

const Navigation: React.FC<NavigationType> = ({ links }) => {

    return (
        <div>
            <div className={s.navContainer}>
                <div className={s.nav}>
                    <ul className={s.nav}>
                        {
                            links.map((l, i) => (
                                <li key={i}>
                                    <a href={l.link}>
                                        {l.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={s.tools}>
                        <span>
                            <Phone />
                            <p>{'+1-202-555-0178'}</p>
                        </span>
                        <span>
                            <USA />
                            <p>{'English'}</p>
                            <DropdownIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation