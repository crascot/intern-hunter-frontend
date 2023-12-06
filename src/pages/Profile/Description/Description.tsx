import React from 'react'
import s from './Description.module.css'

const Description = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <span>
          <h4>Job Description</h4>
          <p>
            Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
          </p>
          <p>
            Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
          </p>
          <p>
            The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
          </p>
          <p>
            Want to work with us? You're in good company!
          </p>
        </span>
      </div>
      <div className={s.overview}>
        <div className={s.salary}>
          <h5>Зарплата</h5>
          <p className={s.salayText}>$100,000 - $120,000</p>
          <p>Yearly salary</p>
        </div>
        <div>
          <h5>Обзор вакансии</h5>
        </div>
      </div>
    </div>
  )
}

export default Description