import React from 'react';
import styled from 'styled-components';
import LogoRpy from './../../assets/logo.png';
const LogoWrapper = styled.div`
  display:flex;
  align-items:center;
`;

const LogoImg = styled.div`
  width:140px;
  height:auto;

  img{
    width:100%;
    height:100%;
  }
`;

export function Logo (props){
  return <LogoWrapper>
    <LogoImg>
      <img src={LogoRpy} alt="Renueva Paraguay"/>
    </LogoImg>
  </LogoWrapper>
}
