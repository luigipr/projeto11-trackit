import styled from "styled-components"
import logo from "./../assets/logo.svg"

export default function BigLogo() {
  return (
    <Container>
      <img src={logo}/>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
  font-size: 52px;
  font-family: 'Pacifico', cursive;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    
  }
`;
