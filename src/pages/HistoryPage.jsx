import styled from "styled-components"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"



export default function HistoryPage(){
    return (
        <Container>
            <NavBar />
            <Content>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <Footer />
        </Container>


    )
}

const Container = styled.div`
    margin-top: 70px;
    background-color: #D4D4D4;
    width: 375px;
    height: 100vh;
    padding-top: 15px;
    font-family: 'Lexend Deca', sans-serif;

`

const Content = styled.div`
    margin-top: 70px;
    align-self: center;
    padding: 0 15px;
    width: 338px;
    margin-top: 25px;
    p {
        margin-top:10px;
        font-size: 18px;
        color: #666666;
    }
   
    h1 {
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
    }


`