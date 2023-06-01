
import axios from "axios"
import { useContext, useState, useEffect} from "react"
import { TokenContext } from "./../contexts/TokenContext"
import { Usercontext } from "./../contexts/UserContext"
import NavBar from "../components/NavBar"
import styled from "styled-components"


export default function HabitsPage() {
    const {token} = useContext(TokenContext);
    const {user, setConcluded, setTodayHabits} = useContext(Usercontext);
    console.log(token)
    console.log(user)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(`${BASE_URL}/habits`, config)
            .then((res) => setHabits(res.data))
            .catch((err) => console.log(err.response.data))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setConcluded])

    const [habits, setHabits] = useState(undefined);
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
        setAddingHabit(true)
    }
    function cancel() {
        setAddingHabit(false)
    }


    return (
        <Container>
            <NavBar data-test='header' />
            <AddHabit>
                Meus hábitos
                <button data-test="habit-create-btn" onClick={addHabit}>+</button>
            </AddHabit>
            <HabitsInfo data-test="habit-create-container" status={AddingHabit} >
                    <form onSubmit={registerHabit}>
                        <div>
                            <input data-test="habit-name-input" disabled={loading} value={habitName} onChange={(e) => setHabitName(e.target.value)} type="text" placeholder="nome do hábito" />
                            <Week >
                                {Week.map((day) =>
                                    <WeekButtons disabled={loading} data-test="habit-day" key={day.id} day={habitsDays.includes(day.id)} onClick={() => selectDays(day)}>{day.name.toUpperCase()}</WeekButtons>
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
                                        />}</button>
                                    
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
    width: 365px;
    height: 50px;
    display: flex;
    color: #126BA5;
justify-content: space-between;
align-items: center; 

button {
    width: 40px;
    height: 35px;
    color: #fff;
    font-size: 25px;
    background: #52B6FF;
    border-radius: 5px;
}

`

const Container = styled.div`
    background-color: #D4D4D4;
    width: 375px;
    height: 100vh;
    font-family: 'Lexend Deca', sans-serif;

`