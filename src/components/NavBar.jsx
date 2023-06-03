import styled from "styled-components"
import { Usercontext } from "../contexts/UserContext"
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const { user } = useContext(Usercontext)
    return (
        <NavBarStyle data-test="header" >
            <Link to='/' style={{ textDecoration: 'none' }}><h1>TrackIt</h1></Link>
            <img src={user.image} alt="avatar" data-test="avatar" />
        </NavBarStyle>
    )
}

const NavBarStyle = styled.div`
    width: 345px;
    height: 50px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    position:fixed;
    top: 0;
    z-index: 1;
    
        h1 {
            font-family: 'Playball';
            font-size: 39px;
            color: #FFFFFF;
        }

        img {
            width: 51px;
            height: 51px;
            border-radius: 100px;
        }

`
