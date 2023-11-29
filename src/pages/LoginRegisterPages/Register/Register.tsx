import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../icons/logo.svg'
import s from '../LoginRegister.module.css'
import Button from '../../../components/Buttons/Button'
import { testCallback } from '../../..'
import { registerStudent, registerEmployer } from '../../../endpoints'
import { RoleType } from '../../../types/Form'

const Register: React.FC = () => {
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
            <h2>Зарегистрироваться как студент</h2>
            <input placeholder='Имя' type="text" />
            <input placeholder='Фамилия' type="text" />
            <input placeholder='Очество' type="text" />
            <input placeholder='Пароль' type="password" />
            <Button callback={testCallback} text='Зарегистрироваться' />
            <NavLink to={registerEmployer}>Я представитель компании</NavLink>
          </form>
          :
          role === 'employer' ?
            <form>
              <h2>Зарегистрироваться как представитель</h2>
              <input placeholder='Название вашей компании' type="text" />
              <input placeholder='Пароль' type="password" />
              <Button callback={testCallback} text='Зарегистрироваться' />
              <NavLink to={registerStudent}>Я студент</NavLink>
            </form>
            :
            ''
      }
    </div>
  )
}

export default Register