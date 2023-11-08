import backgroundStudent from '../../images/bg-student.png'
import backgroundEmployer from '../../images/bg-employer.png'
import s from './Become.module.css'
import LinkButton from '../Buttons/LinkButton'
import { registerEmployer, registerStudent } from '../../endpoints'

const Become = () => {
  const becomeArray = [
    {
      title: 'Я студент',
      text: 'Регистрируйтесь и начните свой путь к успешной карьере.',
      background: backgroundStudent,
      becomeLink: registerStudent
    },
    {
      title: 'Я представитель компании',
      text: ' Зарегистрируйте свою компанию и начните поиск талантливых студентов для вашей команды.',
      background: backgroundEmployer,
      becomeLink: registerEmployer
    }
  ]

  return (
    <ul className={s.become}>
      {
        becomeArray.map((el, i) => (
          <li style={{ backgroundImage: `url(${el.background})` }} key={i}>
            <h2>{el.title}</h2>
            <p>{el.text}</p>
            <span><LinkButton link={el.becomeLink} text='Зарегистрироваться' /></span>
          </li>
        ))
      }
    </ul>
  )
}

export default Become