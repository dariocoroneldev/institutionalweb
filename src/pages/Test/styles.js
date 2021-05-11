import styled from 'styled-components';
import {motion} from 'framer-motion';
export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:30px 0px;
`;

export const  CustomFramer = styled(motion.div)`
background-color:red;
width:100px;
height:300px;
`;


