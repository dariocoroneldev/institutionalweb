import React from 'react';

import { Container, ImgWrapper, CardsContainer, CardWraper } from './styles';
import about from '../../assets/about.png';
import {motion, useSpring, useTransform } from 'framer-motion';
import { cardData } from '../../data/CardData';



function Content() {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (<>
  <Container>
 
    <motion.h2
     initial="hidden"
     animate="visible"
     variants={variants}
     transition={{ duration: 1 , ease: "easeInOut"}}
    >Sobre Nosotros </motion.h2>
    <motion.p
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1 , ease: "easeInOut"}}
    ><span>Renueva Py</span> es una escuela de formación política <br/> que prepara a gente común de diferentes orígenes e ideologías para renovar la democracia paraguaya.</motion.p>
    <CardsContainer>
      {cardData.map((data) => (
       <>
       <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, ease: "easeInOut" }}
       >

        <CardWraper key={data.id}>
          <img src={data.path} alt={data.name}/>
            <div>
              <h2>{data.title}</h2>
              <p>{data.info}</p>
            </div>
            <br/>
             <hr/>
        </CardWraper>
       </motion.div>

        
       </>
      ))}
    </CardsContainer>

    <motion.h2
     initial="hidden"
     animate="visible"
     variants={variants}
     transition={{ duration: 1, ease: "easeInOut" }}
    >Nuestros Principios</motion.h2>
    <motion.p
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1, ease: "easeInOut" }}
    ><span>Renueva Py</span> tiene principios claros que orientan <br/> el desempeño de sus profesionales, docentes y alumnos.</motion.p>
    
  </Container>
    
  </>);
}

export default Content;