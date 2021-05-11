import styled from 'styled-components';
import {motion} from 'framer-motion';
export const Container = styled.div`
 
  width:100%;
  background-color:#fff;
  box-shadow: 4px 3px 8px #ccc;
  height:120px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  align-self:flex-end;

  div{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0px 30px;

  p{
    font-size:.8rem;

    span{
      font-weight:bold;
      color:#ccc;
      a{
        text-decoration:none;
        color:#ccc;

        &:hover{
          color:#000;
        }

      }
    }
  }

}

`;


export const SocialMedia = styled(motion.div)`

`;


export const IconWrap = styled(motion.div)`
display:flex;
align-items:center;
svg{
  margin: 10px 10px;
  width:40px;
  font-size:3rem;
  color:  rgba(206,35,39,1);


}
`;
