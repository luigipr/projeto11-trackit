import { useState } from "react"
import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    function signUp(e){
      e.preventDefault();
  
      const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
  
      const newUser = {name, password, email, image};
  
      const promise = axios.post(URL, newUser);
  
      promise.then( resposta => {
        alert('Você foi cadastrado com sucesso!');
        console.log(newUser)
        // navegar para pagina de login
        navigate('/');
      });
  
      promise.catch( erro => alert(erro.response.data.message));
  
    }
  
    return (
      <Container>
        <BigLogo />
        <form onSubmit={signUp}>
            <Input
                data-test="email-input"
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
            <Input
                data-test="password-input"
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
            />
            <Input
                data-test="user-name-input" 
                type="text"
                placeholder="Nome"
                required
                value={name}
                onChange={ (e) => setName(e.target.value)}
            />         
            <Input
                data-test="user-image-input" 
                type="url"
                placeholder="Imagem"
                required
                value={image}
                onChange={ (e) => setImage(e.target.value)}
            />
            <Button type="submit" data-test="signup-btn">Cadastrar</Button>
        </form>
        <StyledLink to="/" data-test="login-link">Já possui uma conta? Faça login</StyledLink>
      </Container>
    )
  }
  
  const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    font-style: Lexend Deca;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
;
  `
  


  
  const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
  `
  