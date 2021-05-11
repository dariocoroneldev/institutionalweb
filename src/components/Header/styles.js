import styled  from 'styled-components';
import {motion} from 'framer-motion';
export const Container = styled.div`
  /* width:150%; */
  height:90px;
  box-shadow:0 1px 3px rgba(15, 15, 15, 0.13);
  display:flex;
  align-items:center;
  padding: 0 3em;
`;



export const LeftSection = styled(motion.div)`
  display:flex;


`;


export const MiddleSection = styled(motion.div)`
  display:flex;
  flex:2;
  height:100%;
  justify-content:center;

`;
 
export const RightSection = styled(motion.div)`
  display:flex;

`;
 