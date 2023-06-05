import Footer from "../components/Footer"
import axios from "axios"
import { useContext, useState, useEffect} from "react"
import { Usercontext } from "./../contexts/UserContext"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useLocation } from "react-router-dom";
import check from "./../assets/check.svg"


export default function TodayPage() {
    const { user, todayHabits, setTodayHabits, setConcluded } = useContext(Usercontext)
    const weekday = (new Date().toLocaleString('pt-br', { weekday: 'long' }))
    const weekdays = weekday.split("-")[0]
    const day = (dayjs().locale('pt-br').format("DD/MM"))
    const [reload, setReload] = useState([])
    const location = useLocation()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(answer => {
                const data = answer.data
                setTodayHabits(data)
            }).catch(error => console.log(error.response.data))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])
    
    function render() {
        if (todayHabits.find((h) => h.done === true)) {
            let count = 0
            todayHabits.forEach((h) => {
                if (h.done === true) {

                    count = count + 1
                }

            })
            setConcluded(((count / todayHabits.length) * 100).toFixed(2))
            return `${((count / todayHabits.length) * 100).toFixed(2)}% dos hábitos concluídos`

        } else {
            setConcluded(0)
            return 'Nenhum hábito concluído ainda'
        }
    }


    function finishHabit(habit) {
        if (habit.done === true) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config)
                .then(() => {
                    setReload([])
                })
            return
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config)
                .then(() => {
                    setReload([])
                })
                .catch(err => console.log(err.response.data))
        }
    }
        
    
    return (
        <>
        <NavBar />
        <Container>
        <HabitsPageStyle >
                <Day data-test="today" concluded={(todayHabits.find((h) => h.done === true))} >
                    <h1 data-test="today">{`${weekdays.charAt(0).toUpperCase() + weekdays.slice(1)}, ${day}`}</h1>
                    <p data-test="today-counter">{location.pathname === "/hoje" && render()}</p>
                </Day>

                {todayHabits.map((habit, i) =>
                    <RegisteredHabits data-test="today-habit-container" key={habit.id} done={habit.done} sequence={habit.highestSequence === habit.currentSequence && habit.highestSequence > 0} >
                        <div>
                            <h1 data-test="today-habit-name">{habit.name}</h1>
                            <h3 data-test="today-habit-sequence">Sequência atual: <p >{habit.currentSequence} {habit.currentSequence > 1 ? 'dias' : habit.currentSequence === 0 ? '' : 'dia'}</p></h3>
                            <h3 data-test="today-habit-record">Record: <span>  {habit.highestSequence} {habit.highestSequence > 1 ? 'dias' : habit.highestSequence === 0 ? '' : 'dia'}</span> </h3>
                        </div>
                        <DoneButton data-test="today-habit-check-btn" onClick={() => finishHabit(habit)} done={habit.done}></DoneButton>
                    </RegisteredHabits>
                )}
            </HabitsPageStyle>
            </Container>
        <Footer />
        </>
    )
}


const Container = styled.div`
    background-color: #D4D4D4;
    width: 375px;
    height: 100vh;
    padding-top: 15px;
    font-family: 'Lexend Deca', sans-serif;

`

const Day = styled.div`
    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 5px;
        margin-top: 28px;
        width: 303px;
      
    }
    p {
        font-size: 18px;        
        margin-bottom: 8px;
        color: ${props => props.concluded ? "#8FC549" : '#BABABA'};

    }
`

const HabitsPageStyle = styled.div`
    padding-top: 15px;

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;   
    overflow-y: auto;
    padding-bottom: 130px;
    min-height: calc(100vh - 70px);
    margin-top: 60px;
  
`

const RegisteredHabits = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 19px;    
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 310px;
    border-radius: 5px;
    position: relative;
        h1 {
           font-size:20px ;
           color: #666666;
           margin-bottom: 8px;
           margin-top: 10px;
        }    
        h3 {
          font-size  :13px ;
          color: #666666;          
        }   
        p {
            color: ${props => props.done ? '#8FC549' : "#666666"};
            display: inline;
        }    
        span:last-of-type {
            color: ${props => props.sequence ? '#8FC549' : "#666666"};
        }
    
`

const DoneButton = styled.button`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-image: url(${check});            
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    cursor: pointer;`