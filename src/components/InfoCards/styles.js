import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled.div`
margin:30px 6rem;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
 padding:30px;
`;

export const CardWrap = styled.div`
  max-width:200px;
  height:420;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap; 
  background-color:#fff;
  margin:5px 5px;
  padding:20px 15px;
  display:flex;
  flex-direction:column;
  box-shadow:0 5px 15px rgba(0,0,0,.5);
  transition: all .6s ease-in-out;

  &:hover{
      div{
        p{
          font-size:1em;
          transition: all .6s ease-in-out;

          @media (max-width: 768px) {
            font-size:1em;
          }
        }
      }
  }
`;

export const Card = styled(motion.div)`
height:70px;
width:100%;
transition: 400ms ease-in-out;

&:hover{
  height:110px;
  @media (max-width: 768px) {
  height:100px;
  }
}


`;

export const Content = styled.div`
margin:25px 0px 5px 5px;

h2{
font-size:1.5rem;
color:#ce2327;
margin:1px 0px 4px 0px;
}

p{
  margin:-1px 0px 0px 0px;
    @media (max-width: 768px) {
        font-size: .9em;
    }
}
`;

export const ImgBox = styled.div`
position:relative;
width:100%; 
height:260px;


img{
  max-width:100%;
}

`;