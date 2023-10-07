import React from 'react'
import mainSearch from '../../../images/main-search.png'
import s from './MainSearch.module.css'
import Button from '../../../components/Button/Button'
import { testCallback } from '../../..'

const MainSearch = () => {
  return (
    <div className={s.container}>
      <div className={s.mainSearch}>
        <div>
          <h1>{'Find a job that suits your interest & skills.'}</h1>
          <h4>
            {'Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.'}
          </h4>
          <div>
            <label>
              <input />
            </label>
            <label>
              <input />
            </label>
            <Button callback={testCallback} text='Find Job' />
          </div>
        </div>
        <div>
          <img src={mainSearch} alt='find job' />
        </div>
      </div>
    </div>
  )
}

export default MainSearch