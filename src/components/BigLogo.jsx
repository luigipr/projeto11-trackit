import styled from "styled-components"

export default function BigLogo() {
  return (
    <Container>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 54C23.1046 54 24 53.1046 24 52C24 50.8954 23.1046 50 22 50C20.8954 50 20 50.8954 20 52C20 53.1046 20.8954 54 22 54Z" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 54C51.1046 54 52 53.1046 52 52C52 50.8954 51.1046 50 50 50C48.8954 50 48 50.8954 48 52C48 53.1046 48.8954 54 50 54Z" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10H14L20 44H52" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 36H51.18C51.4113 36.0002 51.6354 35.9202 51.8144 35.7736C51.9933 35.6271 52.1159 35.423 52.1613 35.1963L55.7612 17.1963C55.7903 17.0511 55.7868 16.9013 55.7509 16.7577C55.715 16.6141 55.6477 16.4802 55.5539 16.3658C55.46 16.2513 55.3419 16.1592 55.208 16.0959C55.0742 16.0327 54.928 15.9999 54.78 16H16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <div>Camppi</div>
    </Container>
  );
}

const Container = styled.div`
  padding: 41px 0;
  font-size: 52px;
  font-family: 'Pacifico', cursive;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    bottom: -3px;
    right: -5px;
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }
`;
