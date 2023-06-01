import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Usercontext } from "./../contexts/UserContext"
import { useContext} from "react"

export default function Footer() { 

    const {concluded} = useContext(Usercontext);

return (
    <FooterPage>
        <Link to='/habitos'  data-test="habit-link"><p>Hábitos</p></Link>
        <Link to="/hoje" data-test="today-link" >
                <TodayButton>
                    <CircularProgressbar
                        value={concluded}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",


                        })}
                    />
                </TodayButton>
        </Link>
        <Link to='/historico' data-test="history-link"><p>Histórico</p></Link>
    </FooterPage>
    )
}

const FooterPage = styled.div`
    background: #FFFFFF;
    color: #52B6FF;
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    position: fixed;
    bottom: 0;
    p {
            font-size: 18px;
            color: #52B6FF;
            cursor: pointer;
        }
`
const TodayButton = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 100px;
    position: absolute;
    bottom: 10px;
    border-style: none;
    left: calc(50% - 46px);
    font-size: 18px;
    color: #FFFFFF;
    cursor: pointer;
`