import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../icons/logo.svg'
import s from '../LoginRegister.module.css'
import Button from '../../../components/Buttons/Button'
import { registerStudent, registerEmployer } from '../../../endpoints'
import { RoleType, thenDataType } from '../../../types/Form'
import { useSignupEmployerMutation, useSignupStudentMutation } from '../../../redux/formAPI'
import { setToken } from '../../../redux/authSlice/authSlice'
import { useDispatch } from 'react-redux'

const Register: React.FC = () => {
  const { role } = useParams<{ role: RoleType }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addStudent] = useSignupStudentMutation()
  const [addEmployer] = useSignupEmployerMutation();

  const handleAddUser = async () => {
    const newUser = { username: username, password: password, email: email };
    if (newUser) {
      if (role === 'student') {
        await addStudent(newUser).unwrap()
          .then((data: thenDataType) => {
            dispatch(setToken(data.Token));
            localStorage.setItem('token', data.Token);
            navigate(-1);
          })
      }
      else if (role === 'employer') {
        await addEmployer(newUser).unwrap()
          .then((data: thenDataType) => {
            dispatch(setToken(data.Token));
            localStorage.setItem('token', data.Token);
            navigate(-1);
          })
      }
    }
  }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <div className={s.form}>
            <h2>Зарегистрироваться как студент</h2>
            <input placeholder='Имя' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='Почта' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button callback={handleAddUser} text='Зарегистрироваться' />
            <NavLink to={registerEmployer}>Я представитель компании</NavLink>
          </div>
          :
          role === 'employer' ?
            <div className={s.form}>
              <h2>Зарегистрироваться как представитель</h2>
              <input placeholder='Компания' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input placeholder='Почта' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button callback={handleAddUser} text='Зарегистрироваться' />
              <NavLink to={registerStudent}>Я студент</NavLink>
            </div>
            :
            ''
      }
    </div>
  )
}

export default Register