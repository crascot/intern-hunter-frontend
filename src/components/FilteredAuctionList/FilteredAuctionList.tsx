import AuctionList from './AuctionList/AuctionList'
import s from './FilteredAuctionList.module.css'
import { ReactComponent as Arrow } from '../../icons/arrow-right.svg'
import { useState } from 'react'
import { useGetAuctionsQuery } from '../../redux/auctionAPI'
import { AuctionType } from '../../types/auctonType'

const FilteredAuctionList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetAuctionsQuery(currentPage);

  const testPages = data && data.results.map((_: never, i: string) => i + 1)

  const changePage = (page: number) => setCurrentPage(page)
  const decrement = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)
  const increment = () => {
    setCurrentPage(prev => prev < testPages.length ? prev + 1 : prev)
  }

  let pagesArray = [];
  for (let i = 0; i < data?.count / 6; i++) {
    pagesArray.push(i + 1)
  }


  if (isLoading || !data.results) return <div>Загрузка</div>;

  return (
    <div className={s.container}>
      {
        data?.results.map((auction: AuctionType) =>
          <AuctionList
            titelname={auction.titelname}
            active={auction.active}
            creator={auction.creator}
            key={auction.auctionId}
          />
        )
      }

      <div className={s.paginationContainer}>
        <ul>
          <li onClick={decrement} className={s.arrow}><Arrow /></li>
          {
            pagesArray.map((page: number, i: number) => (
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