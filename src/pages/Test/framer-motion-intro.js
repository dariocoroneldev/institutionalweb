import React from 'react';

import { Container, CustomFramer} from './styles';
import {Button} from '@material-ui/core';
import { motion, useMotionValue, useTransform } from "framer-motion"


function Test() {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
  

  return <>
  <Container>
    <CustomFramer
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    whileHover={{ scale: 1.1, backgroundColor:'blue', height:'450px', transition:'all 3s', borderRadius:'50%' }}
    whileTap={{ scale: 0.9 }}
    style={{ x, opacity }}
    >

    </CustomFramer>
  </Container>
  </>;
}

export default Test;