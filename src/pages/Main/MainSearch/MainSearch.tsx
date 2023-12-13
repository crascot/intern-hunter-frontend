import mainSearch from '../../../images/main-search.png'
import s from './MainSearch.module.css'
// import job from '../../../icons/main-search-block-icons/job.svg'
// import companies from '../../../icons/main-search-block-icons/companies.svg'
// import candidates from '../../../icons/main-search-block-icons/candidates.svg'
// import Block from '../../../components/Block/Block'

const MainSearch = () => {
  // const blocksData = [
  //   {
  //     icon: job,
  //     count: '175,324',
  //     text: 'Аукцион'
  //   },
  //   {
  //     icon: companies,
  //     count: '97,354',
  //     text: 'Компаний'
  //   },
  //   {
  //     icon: candidates,
  //     count: '3,847,154',
  //     text: 'Работников'
  //   },
  //   {
  //     icon: job,
  //     count: '7,532',
  //     text: 'Новых аукционов'
  //   },
  // ]

  return (
    <div className={s.container}>
      <div className={s.mainSearch}>
        <div>
          <h1>Найдите работу, которая соответствует вашим интересам и навыкам.</h1>
          <h4>
            Выбирай интересующие тебя аукцион и покажи себя в деле выполняя задачи и пробивайся в топ 1
          </h4>
        </div>
        <div>
          <img
            src={mainSearch}
            alt='find job'
            draggable="false"
          />
        </div>
      </div>
      {/* <div className={s.blocks}>
        {
          blocksData.map((block, i) => (
            <Block
              icon={block.icon}
              count={block.count}
              text={block.text}
              key={i}
            />
          ))
        }
      </div> */}
    </div>
  )
}

export default MainSearch