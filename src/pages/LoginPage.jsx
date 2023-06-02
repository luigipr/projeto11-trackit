import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { TokenContext } from "../contexts/TokenContext"
import { Usercontext } from "../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"



export default function LoginPage(props) {
  
  const [loading, setLoading] = useState(false)
  const { getUser } = useContext(Usercontext)
  const {token, getToken} = useContext(TokenContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const navigate = useNavigate();

  function login(e){

    e.preventDefault();
    setLoading(true)

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const novoLogin = {email, password};

    const promise = axios.post(URL, novoLogin);

    promise.then( resposta => {
      
      console.log(resposta.data.token);
      
      getToken(resposta.data.token);
      getUser(resposta.data)

      navigate('/hoje');

    });
    promise.catch( error => alert(error.response.data.message));
    
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={login}>
        <Input
          disabled={loading}
          data-test="email-input"
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        />
        <Input
          disabled={loading}
          data-test="password-input"
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading} data-test="login-btn">{!loading ? 'Entrar' :   <ThreeDots
                                            color="#FFFFFF"
                                            height="60"
                                            width="60"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        />}</Button>
      </form>

      <StyledLink to="cadastro"  data-test="signup-link">Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 375px;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`