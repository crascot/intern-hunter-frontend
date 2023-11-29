import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../icons/logo.svg'
import s from '../LoginRegister.module.css'
import Button from '../../../components/Buttons/Button'
import { testCallback } from '../../..'
import { loginStudent, loginEmployer } from '../../../endpoints'
import { RoleType } from '../../../types/Form'

const Login: React.FC = () => {
  const { role } = useParams<{ role: RoleType }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'student' && role !== 'employer') {
      navigate(-1);
    }
  }, [role, navigate]);

  if (role !== 'student' && role !== 'employer') {
    return null;
  }

  return (
    <div className={s.loginRegister}>
      <div className={s.logo}>
        <NavLink to='/'>
          <Logo />
          <h3>Intern Hunter</h3>
        </NavLink>
      </div>
      {
        role === 'student' ?
          <form>
            <h2>Войти как студент</h2>
            <input placeholder='Имя' type="text" />
            <input placeholder='Фамилия' type="text" />
            <input placeholder='Очество' type="text" />
            <input placeholder='Пароль' type="password" />
            <Button callback={testCallback} text='Войти' />
            <NavLink to={loginEmployer}>Я представитель компании</NavLink>
          </form>
          :
          role === 'employer' ?
            <form>
              <h2>Войти как представитель</h2>
              <input placeholder='Название вашей компании' type="text" />
              <input placeholder='Пароль' type="password" />
              <Button callback={testCallback} text='Войти' />
              <NavLink to={loginStudent}>Я студент</NavLink>
            </form>
            :
            ''
      }
    </div>
  )
}

export default Login