import React from 'react';
import styled from 'styled-components';

const AccesibilityContainer = styled.div`
  display:flex; 
`;

const LoginButton = styled.button`
  border:0;
  outline:0;
  padding: 8px 1em;
  color:#fff;
  font-size:2rem;
  font-weight:bolder;
  border-radius:10px; 
  background-color:#084bd0;
  background-image:linear-gradient(to right, transparent 0%,  #043eb2 100% );
  transition: all 240ms ease-in-out;
  cursor:pointer;

  &:hover{
    background-color:#ce2020;
  }

`;

function Accesibility(props) {
  return (
    <>
    <AccesibilityContainer>
      <LoginButton>
        Contacto
      </LoginButton>
    </AccesibilityContainer>
    </>
  );
}

export default Accesibility;