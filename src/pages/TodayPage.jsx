import Footer from "../components/Footer"
import axios from "axios"
import { useContext, useState, useEffect} from "react"
import { Usercontext } from "./../contexts/UserContext"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";


export default function TodayPage() {
    const { user, todayHabits, setTodayHabits, setConcluded } = useContext(Usercontext)

    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(answer => {
                const data = answer.data
                setTodayHabits(data)
            }).catch(error => console.log(error.response.data))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])
    


    
    
    
    
    
    
    
    return (
        <>
        <NavBar />
        <Container>

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
