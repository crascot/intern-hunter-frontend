import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../icons/logo.svg'
import s from '../LoginRegister.module.css'
import Button from '../../../components/Buttons/Button'
import { useSigninMutation } from '../../../redux/formAPI'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../redux/authSlice/authSlice'

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signin] = useSigninMutation();

  const handleAddUser = async () => {
    const newUser = { username: username, password: password };
    if (newUser) {
      await signin(newUser).unwrap()
        .then((data) => {
          dispatch(setToken(data.Token));
          localStorage.setItem('token', data.Token);
          navigate(-1);
        })
        .catch((e) => alert(e.data.error))
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={s.loginRegister}>
      <div className={s.logo}>
        <NavLink to='/'>
          <Logo />
          <h3>Intern Hunter</h3>
        </NavLink>
      </div>
      {
        <div className={s.form}>
          <h2>Войти в аккаунт</h2>
          <input placeholder='Имя' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button callback={handleAddUser} text='Войти' />
        </div>
      }
    </div>
  )
}

export default Login