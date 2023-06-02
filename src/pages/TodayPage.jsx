import Footer from "../components/Footer"
import axios from "axios"
import { useContext, useState, useEffect} from "react"
import { TokenContext } from "./../contexts/TokenContext"
import { Usercontext } from "./../contexts/UserContext"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"
import Trash from "./../assets/Trash.png"



export default function TodayPage() {
    
    
    
    
    
    
    
    
    
    
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