import Footer from "../components/Footer"
import axios from "axios"
import { useContext, useState, useEffect} from "react"
import { TokenContext } from "./../contexts/TokenContext"
import { Usercontext } from "./../contexts/UserContext"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"

export default function HabitsPage() {
    const {token} = useContext(TokenContext);
    const {user, setConcluded, setTodayHabits} = useContext(Usercontext);
    console.log(token)
    console.log(user)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    

    useEffect(() => {

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((answer) => setHabits(answer.data))
            .catch((error) => console.log(error.response.data))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setConcluded])

    const [habitsDays, setHabitsDays] = useState([])
    const [habitName, setHabitName] = useState("")
    const [habits, setHabits] = useState([]);
    const [AddingHabit, setAddingHabit] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const Week = [
        { name: 'd', id: 0 },
        { name: 's', id: 1 },
        { name: 't', id: 2 },
        { name: 'q', id: 3 },
        { name: 'q', id: 4 },
        { name: 's', id: 5 },
        { name: 's', id: 6 },
    ]

    function addHabit() {
        setLoading(false)
        setAddingHabit(true)
    }
    function cancel() {
        setAddingHabit(false)
    }


    function selectDays(Day) {
        if(Day.day === true) {
            const arr = habitsDays.filter(Day => Day.Day === true)
            setHabitsDays(arr)
        }
        if (Day.day === false) {
            const arr = [...habitsDays, Day];
            setHabitsDays(arr)    
            console.log(arr)

        }
    }





    function registerHabit(e) {
        e.preventDefault();
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const habit = { name: setHabitName, days: habitsDays};

        const promise = axios.post(url, habit, config);

        promise.catch(error => alert(error.response.data.message));

        promise.then( answer => {
            const arr = [...habits, habit];
            
            setHabits(arr)
        })
        setLoading(true)
    }



    return (
        <Container>
            <NavBar data-test='header' />
            <AddHabit>
                <h1>Meus hábitos</h1>
                <button data-test="habit-create-btn" onClick={addHabit}>+</button>
            </AddHabit>
            <HabitsInfo data-test="habit-create-container" status={AddingHabit} >
                    <form onSubmit={registerHabit}>
                        <div>
                            <input data-test="habit-name-input" disabled={loading} value={habitName} onChange={(e) => setHabitName(e.target.value)} 
                            type="text" placeholder="nome do hábito" />
                            <Week >
                                {Week.map((day) =>
                                    <WeekButtons disabled={loading} data-test="habit-day" key={day.id}  day={habitsDays.includes(day.id)} 
                                    onClick={() => selectDays(day)}>{day.name.toUpperCase()}</WeekButtons>
                                )}
                            </Week>
                            <SendInfos>
                                <button type="button" disabled={loading} data-test="habit-create-cancel-btn" onClick={cancel}>Cancelar</button>
                               <button data-test="habit-create-save-btn" disabled={loading} type="submit">{!loading ? 'Salvar' :   <ThreeDots
                                            color="#FFFFFF"
                                            height="60"
                                            width="60"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        />}
                                </button>                                  
                            </SendInfos>
                        </div>
                    </form>
            </HabitsInfo>                                




                                    
        
                                    
        
        
        
        
            {habits.length < 1 &&
                <NoHabits>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                </NoHabits>
            }

            <Footer />
        </Container>



    )
}

const HabitsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 19px;    
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    display: ${props => props.status ? "block" : "none"};
        input {
            width: 303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding: 10px;
                &::placeholder {
                    font-size: 20px;
                    color: #DBDBDB;;
                }
                &:disabled {
                background-color: #CFCFCF;
            }
        }

`


const NoHabits = styled.div`
    width: 338px;
    margin-top: 25px;
        p {
            font-size: 18px;
            color: #666666;
        }`

const AddHabit = styled.div`
    padding:0 15px 0 15px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;   
    width: 303px;

        h1 {
            font-weight: 400;
            font-size: 22.976px;
            color: #126BA5;
        }
        button {
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4px;
            font-size: 27px;
            color: #FFFFFF;
            text-align: center;
            border-style: none;
            cursor: pointer;
            &:disabled {
                background-color: #CFCFCF;
            }
        }
`

const Container = styled.div`
    background-color: #D4D4D4;
    width: 375px;
    height: 100vh;
    font-family: 'Lexend Deca', sans-serif;

`

const WeekButtons = styled.div`
     width: 30px;
    height: 30px;
    background-color: ${props => props.day ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const SendInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
    margin-top: 15px;
        button:first-of-type {
            width: 69px;
            height: 20px;
            font-size: 16px;
            color: #52B6FF;
            border: none;
            background-color: #FFFFFF;
            margin-right: 23px;
            cursor: pointer;
        }
        button{
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            font-size: 16px;
            color: #FFFFFF;
            border-style: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
`