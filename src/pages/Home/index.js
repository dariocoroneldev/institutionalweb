import React from 'react';
import Content from '../../components/Content';
import InfoCards from '../../components/InfoCards';
import InfoCardsAlt from '../../components/InfoCardsAlt';
import Slider from '../../components/Slider';
import { Container } from './styles';

function home() {


  return (
    
  <>
  <Container>
    <Slider/>
    <Content/>
    <InfoCards/>
    <InfoCardsAlt/>
  </Container> 
  </>
  );
}

export default home;