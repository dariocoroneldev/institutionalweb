import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MenuData} from './../../data/MenuData';

const NavLinksContainer = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  

`;

const LinksWrapper = styled.ul`
  display:flex;
  height:100%;

`;

const LinkItem = styled.li`
  display:flex;
  list-style:none;
  height:100%;
  padding: 0 1.1em;
  color:#ccc;
  font-weight:500;
  font-size:2rem;
  align-items:center;
  justify-content:center;
  margin: 0px 10px;
  border-top: 2px solid transparent;
  transition: all 200ms ease-in-out;

  &:hover{
    border-bottom: 2px solid #063187;
    color:#ce2020;
  }
 
`;

const LinkElement = styled(Link)`
  text-decoration:none;
  color:inherit;
  font-size:inherit;
 

`; 

export default function NavLink(props){
  return<NavLinksContainer>
    <LinksWrapper>
    
        {MenuData.map((menudata) => (
            <LinkItem key={menudata.id}>
                 <LinkElement to={menudata.path}>  {menudata.name} </LinkElement>
            </LinkItem>
        ))}

        

    </LinksWrapper>
  </NavLinksContainer>
}
