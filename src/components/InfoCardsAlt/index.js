import React, { useState } from 'react';
import { Container, Card, Content, Popup, ContentPop} from './styles';
import {InfoCardDataTwo} from './../../data/InfoCardData';
import {MenuToggle} from './../../components/NavLink/menuToggle';


function InfoCardsAlt() {

 const [isOpen, SetOpen] = useState(false);
 const [Id, SetId ] = useState(0);

 function Makeappear (id) {
  SetOpen(!isOpen);
  SetId(id);
 }

 function MakeappearTwo (id) {
  SetOpen(false);
  SetId(id);
  SetOpen(true);
 }

  return (<>
    <Container>
  
     {InfoCardDataTwo.map((data, index) => (
       <>
          <Card >
             {index === Id && 
              <Popup isOpen={isOpen}>
              {isOpen  && <MenuToggle isOpen={isOpen} toggle={() => SetOpen(!isOpen)}/> }
              <ContentPop isOpen={isOpen}>
                <p>{data.info}</p>
              </ContentPop>
              </Popup>
             }
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {index === Id ? 
            <Content isOpen={isOpen}>
            <h2>Trabajamos</h2>
            <h3>{data.title}</h3>
            <p>{data.info}</p>
            <button onClick={() => Makeappear(data.id)} 
              href='/#' 
              type='button'>
                saber mas
              </button>
          </Content>
            :
            <Content>
              <h2>Trabajamos</h2>
              <h3>{data.title}</h3>
              <p>{data.info}</p>
              <button onClick={() => MakeappearTwo(data.id)} 
                href='/#' 
                type='button'>
                  saber mas
                </button>
            </Content>
            }  
          </Card>
       </>
     ))}
     
    </Container>
  </>);
}

export default InfoCardsAlt;