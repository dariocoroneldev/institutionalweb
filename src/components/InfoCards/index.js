import React from 'react';

import { Container, Card, ImgBox, Content, CardWrap } from './styles';
import {InfoCardData} from './../../data/InfoCardData';

function InfoCards() {
  return (<>
  <Container>
   {InfoCardData.map((data) => (
     <>
     <CardWrap>
      <Card>
          <ImgBox>
            <img src={data.path} alt=""/>
          </ImgBox>
        </Card>
        <Content>
            <h2>{data.title}</h2>
            <p>{data.info}</p>
        </Content>
     </CardWrap>
     </>
   ))}
  </Container>
  </>);
}

export default InfoCards;