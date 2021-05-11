import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MenuData} from './../../data/MenuData';
import { MenuToggle } from './menuToggle';
import Accesibility from './../Accesibility';
const NavLinksContainer = styled.div`
  height:100%;
  display:flex;
  align-items:center;

`;

const LinksWrapper = styled.ul`
  display:flex; 
  align-items:center;
  justify-content:center;
  width:100%;
  height:100vh;
  background-color:#fff;
  width:100%;
  flex-direction:column; 
  position:fixed;
  top:100px;
  left:0; 
  transition:.6s ease-in-out;
  top:${({isOpen}) => (isOpen ? '0' : '-100px')};
  opacity:${({isOpen}) => (isOpen ? '1' : '0')};
  z-index:${({isOpen}) => (isOpen ? '100': '0')};
`;

const LinkItem = styled.li`
  display:flex;
  list-style:none;
  width:100%;
  padding: 3.4rem 1.1em;
  color:#ccc;
  font-weight:500;
  font-size:2rem;
  align-items:center;
  justify-content:center;
  margin: 0px 10px;

 
`;

const LinkElement = styled(Link)`
  text-decoration:none;
  color:inherit;
  font-size:inherit;
 

`; 

export default function NavLinkMobile(props){

  const [isOpen, SetOpen] = useState(false);

  return<NavLinksContainer>
    <MenuToggle isOpen={isOpen} toggle={() => SetOpen(!isOpen)}/>
    

    <LinksWrapper isOpen={isOpen} >
    
    {MenuData.map((menudata) => (
        <LinkItem key={menudata.name}>
             <LinkElement to={menudata.path} onClick={() => SetOpen(!isOpen)}>  {menudata.name} </LinkElement>
        </LinkItem>
    ))}

    <Accesibility/>

  </LinksWrapper>
    
  </NavLinksContainer>
}
