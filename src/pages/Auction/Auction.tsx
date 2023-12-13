import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useActiveAuctionMutation, useGetAuctionQuery, useRatingStudentMutation } from '../../redux/usersAPI';
import s from './Auction.module.css'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper';
import { useSendTaskMutation } from '../../redux/usersAPI';
import Button from '../../components/Buttons/Button';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const Auction = () => {

    const params = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [send] = useSendTaskMutation();
    const [active] = useActiveAuctionMutation();
    const [ratingApi] = useRatingStudentMutation()

    const students = useGetAuctionQuery(params.id)?.currentData?.tasks?.students ?? [];
    const ratingArray = useGetAuctionQuery(params.id)?.currentData?.tasks?.rating ?? [];
    const auctionInfo = useGetAuctionQuery(params.id)?.currentData?.auction;
    const profile = useSelector((state: any) => state.authSlice.user);
    const [task, setTask] = useState('');
    const [currentStudent, setCurrentStudent] = useState<null | number>(null);
    const current = students.find((el: any) => el.user_creator === currentStudent)

    const [rating, setRating] = useState(0)

    const sendTask = () => {
        send({ id: params.id, task: task })
            .then(() => navigate(0))
    }

    const activeAuction = () => {
        const updateAuction = {
            id: auctionInfo.auctionId,
            auction: { ...auctionInfo, active: !auctionInfo.active }
        }
        active(updateAuction)
            .then(() => navigate(0))
            .catch((err) => console.log(err))
    }

    const showCurrentStudent = (id: number) => {
        if (auctionInfo && profile) {
            if (auctionInfo.creator === profile.data.id) {
                setCurrentStudent(id)
            }
        }
    }

    const rateStudent = () => {
        if (current) {
            const rate = {
                id: auctionInfo.auctionId,
                student: {
                    uchastnik: current.user_creator,
                    point: rating
                }
            }
            ratingApi(rate)
                .then(() => navigate(0))
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        if (!token) navigate(-1);
    }, [token, navigate])

    if (token && auctionInfo && profile) {
        return (
            <div className={s.profile}>
                <NavbarMenuWrapper current='Аукционы' />
                <div className={s.container}>
                    <div className={s.auction}>
                        <div className={s.mans}>
                            <h3 className={s.creator}>
                                Создатель: {
                                    auctionInfo.creator === profile.data.id ?
                                        'Вы'
                                        :
                                        auctionInfo.user_creator
                                }
                            </h3>
                            <ul className={s.students}>
                                <h3>Участники:</h3>
                                {
                                    students?.map((info: any, i: number) =>
                                        <li onClick={() => showCurrentStudent(info.user_creator)} key={info.taskId}>
                                            {i + 1}: {info.user_creator}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className={s.info}>
                            {
                                currentStudent ?
                                    <>
                                        <span className={s.current}>
                                            <span>
                                                <h3>{current.user_creator}</h3>
                                                <h3>{current.email}</h3>
                                                <a href={current.task}>
                                                    Посмотреть задачу
                                                </a>
                                                <h5>
                                                    Задача была отправлена: {dayjs(current.time_send).format('DD-MM-YYYY')}
                                                </h5>
                                            </span>
                                            <span>
                                                <input value={rating} onChange={(e) => setRating(Number(e.target.value))} type='number' max='100' min='0' />
                                                <Button callback={rateStudent} text='Оценить' />
                                            </span>
                                            <Button callback={() => setCurrentStudent(null)} text='Вернуться к аукциону' />
                                        </span>
                                    </>
                                    :
                                    <>
                                        <span>
                                            <h3>{auctionInfo?.titelname}</h3>
                                            <h4>
                                                {
                                                    auctionInfo.active ?
                                                        auctionInfo.task
                                                        :
                                                        'Аукцион еще не начался, задача появится после начала аукциона'
                                                }
                                            </h4>
                                            {
                                                ratingArray.length && <table>
                                                    <tr>
                                                        <th>Место</th>
                                                        <th>Имя</th>
                                                        <th>Кол-во баллов</th>
                                                    </tr>
                                                    {
                                                        ratingArray?.map((el: any, i: number) => (
                                                            <tr>
                                                                <td>{i + 1}</td>
                                                                <td>{el.uchastnik}</td>
                                                                <td>{el.point}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </table>
                                            }
                                            <span>
                                                {
                                                    auctionInfo.creator === profile.data.id ?
                                                        !auctionInfo.active ?
                                                            <Button callback={activeAuction} text='Начать аукцион' />
                                                            :
                                                            `Аукцион закончится ${auctionInfo.end_date}`
                                                        :
                                                        ''
                                                }
                                            </span>
                                        </span>
                                        {
                                            auctionInfo.creator === profile.data.id ?
                                                ''
                                                :
                                                students.length < auctionInfo.max_interns && auctionInfo.active && !students.find((el: any) => el.student === profile.data.id) &&
                                                <>
                                                    <input value={task} onChange={(e) => setTask(e.target.value)} placeholder='Ссылка на ваш проект(github, gitlab и тп)' />
                                                    <Button callback={sendTask} text='Отправить' />
                                                </>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return <></>
}

export default Auction