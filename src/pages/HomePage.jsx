import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function LoginPage(props) {
  
  const {setToken} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const navigate = useNavigate();

  function login(e){

    e.preventDefault();

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/camppi/auth/login';

    const novoLogin = {email, password};

    const promise = axios.post(URL, novoLogin);

    promise.then( resposta => {
      
      console.log(resposta.data.token);
      
      setToken(resposta.data.token);

      navigate('/market');

    });
    promise.catch( erro => alert(erro.response.data.message));
    
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={login}>
        <Input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </form>

      <StyledLink to="cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F60919;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`