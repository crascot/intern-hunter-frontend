import React from 'react'
import s from './HowWork.module.css'
import Card from './Card/Card'
import createAccount from '../../../icons/create-account.svg'
import find from '../../../icons/find.svg'
import resume from '../../../icons/resume.svg'
import getJob from '../../../icons/get-job.svg'

const HowWork = () => {
  const cardsData = [
    {
      img: createAccount,
      title: 'Создание аккаунта',
      text: 'Для участия в аукционе или для создания своего'
    },
    {
      img: resume,
      title: 'О себе',
      text: 'Заполняете  о себе краткую информацию'
    },
    {
      img: find,
      title: 'Находите нужный аукцион',
      text: 'Учавствуете и организатор выдает вам задачу'
    },
    {
      img: getJob,
      title: 'Получаете работу',
      text: 'Если вы удовлетворили организатора, вас берут на работу'
    },
  ]

  return (
    <div className={s.container}>
      <div className={s.howWork}>
        <h2>Как Intern Hunter работает</h2>
        <ul>
          {
            cardsData.map((card, i) => (
              <Card
                img={card.img}
                title={card.title}
                text={card.text}
                key={i}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default HowWork