import AuctionList from './AuctionList/AuctionList'
import s from './FilteredAuctionList.module.css'
import logo from './AuctionList/logo.png'
import { ReactComponent as Arrow } from '../../icons/arrow-right.svg'
import { useState } from 'react'

const FilteredAuctionList = () => {
  const testList = [
    {
      id: 0,
      title: 'Фронтенд разработчик',
      minSalary: 20000,
      maxSalary: 40000,
      avatar: logo,
      nameCompany: 'Jembrij'
    },
    {
      id: 1,
      title: 'Фронтенд разработчик',
      minSalary: 20000,
      maxSalary: 40000,
      avatar: logo,
      nameCompany: 'Jembrij'
    },
    {
      id: 2,
      title: 'Фронтенд разработчик',
      minSalary: 20000,
      maxSalary: 40000,
      avatar: logo,
      nameCompany: 'Jembrij'
    },
  ]

  const testPages = [1, 2, 3]

  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (page: number) => setCurrentPage(page)
  const decrement = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)
  const increment = () => setCurrentPage(prev => prev < testPages.length ? prev + 1 : prev)

  return (
    <div className={s.container}>
      {
        testList.map((auction) =>
          <AuctionList
            title={auction.title}
            minSalary={auction.minSalary}
            maxSalary={auction.maxSalary}
            avatar={auction.avatar}
            nameCompany={auction.nameCompany}
            key={auction.id}
          />
        )
      }

      <div className={s.paginationContainer}>
        <ul>
          <li onClick={decrement} className={s.arrow}><Arrow /></li>
          {
            testPages.map((page, i) => (
              <li
                onClick={() => changePage(page)}
                className={currentPage === page ? s.active : ''}
                key={i}>
                {page}
              </li>
            )
            )
          }
          <li onClick={increment} className={s.arrow}><Arrow /></li>
        </ul>
      </div>
    </div>
  )
}

export default FilteredAuctionList