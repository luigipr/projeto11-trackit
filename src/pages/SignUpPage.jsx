import { useState } from "react"
import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"


export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
  
    const navigate = useNavigate();
  
    function signUp(e){
      e.preventDefault();
      setLoading(true);
      const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
  
      const newUser = {name, password, email, image};
  
      const promise = axios.post(URL, newUser);
  
      promise.then( resposta => {
        alert('Você foi cadastrado com sucesso!');
        console.log(newUser)
        // navegar para pagina de login
        navigate('/');
      });
  
      promise.catch( erro => {alert(erro.response.data.message)
        setLoading(false)
    });
  
    }
  
    return (
      <Container>
        <BigLogo />
        <form onSubmit={signUp}>
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
            <Input
                disabled={loading}
                data-test="user-name-input" 
                type="text"
                placeholder="Nome"
                required
                value={name}
                onChange={ (e) => setName(e.target.value)}
            />         
            <Input
                disabled={loading}
                data-test="user-image-input" 
                type="url"
                placeholder="Imagem"
                required
                value={image}
                onChange={ (e) => setImage(e.target.value)}
            />
            <Button type="submit" disabled={loading} data-test="signup-btn">{!loading ? 'Cadastrar' :   <ThreeDots
                                            color="#FFFFFF"
                                            height="60"
                                            width="60"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        />}</Button>
        </form>
        <StyledLink to="/" data-test="login-link">Já possui uma conta? Faça login</StyledLink>
      </Container>
    )
  }
  
  const Container = styled.div`
    min-height: 100vh;
    width: 375px;
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
  