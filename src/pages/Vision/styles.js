import styled, {keyframes} from 'styled-components';

export const Info = styled.div`
`;

export const Popup = styled.div`
  /* background-color:#084bd0; */
  transition:all 1s ease-in-out;
  transform:${props => props.isOpen ? 'translateX(100%)' : 'translateX(-130%)'};
  width:${props => props.isOpen ? '100%' : '0%'};
  height:100vh;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  
`;

export const ContentPop = styled.div`
  transition:all 1s ease-in-out;

    transform:${props => props.isOpen ? 'translateX(-40%)' : 'translateX(-130%)'};
  
   p{
     width:150px;
     margin:10px 0px;
     font-size:1.5rem;
   }
`;

export const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  position:relative;
  margin:20px 0px;

  @media (max-width: 768px) {
    flex-wrap:nowrap;
    flex-direction:column;
    justify-content:space-around;
    height:100%;
  }

 

  &::before{
    content:'';
    position:absolute;
    top:2px;
    left:2px;
    bottom:2px;
    background-color: rgba(255,255,255, 0.1);
    pointer-events:none;
  }
`;

const animate1 = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(100%);
  }
`;

const animate2 = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(100%);
  }  
`;

const animate3 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  } 
`;

const animate4 = keyframes`
  0% {
    transform: translateY(100%);
  }
  100%{
    transform: translateY(-100%);
  }
`;

export const Card = styled.div`
margin:10px 10px;
background-color:#fff; 
position:relative;
width:300px;
height:360px;
display:flex;
justify-content:center;
align-items:center;
box-shadow:0 5px 15px rgba(0,0,0,.5);
overflow:hidden;
opacity:.5;
transition:all .5s ease-in-out;
border-radius:20px;



@media (max-width: 768px) {
    width:300px;
    height:100vh;
  }


@media (max-width: 768px) {
    width:300px;
    height:350px;
  }


&:hover{
  border-radius:2px;
}


span{
  transition:.5s;
  opacity:0;
}

  span:nth-child(1){
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:3px;
    background:linear-gradient(to right, transparent, red);
    animation: ${animate1} 2s linear infinite;
    animation-delay:1s;
  }

  span:nth-child(2){
    position:absolute;
    top:0;
    right:0;
    width:3px;
    height:100%;
    background:linear-gradient(to bottom, transparent, red);
    animation: ${animate2} 2s linear infinite;
    animation-delay:1s;

  }

  span:nth-child(3){
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:3px;
    background:linear-gradient(to left, transparent, red);
    animation: ${animate3} 2s linear infinite;
    animation-delay:1s;

  }

  span:nth-child(4){
    position:absolute;
    top:0;
    left:0;
    width:3px;
    height:100%;
    background:linear-gradient(to left, transparent, red);
    animation: ${animate4} 2s linear infinite;
    animation-delay:1s;

  }

  &:hover{

    opacity:1;

    span{
      opacity:.6;
    }

     div{
       h2{
         opacity:1;
         transform:translateY(-70px) translateX(-50px);
         font-size:2.3rem;
         font-weight:bolder;
       }

       h3{
         opacity:1;
         transform:translateY(-30px);

       }

       p{
         opacity:1;
         transform:translateY(-10px);

       }

       button{
        position:relative;
        right:0;
        bottom:0;
        opacity:1;
        transform:translateY(30px);
        z-index:100;
        cursor: pointer;

       }
     } 
  }

`;

export const Content = styled.div`
  padding:0px;
  text-align:center;
  transition:all .5s ease-in-out;
  transform: ${props => props.isOpen ? 'translateX(180%)' : 'translateX(0)'};
  @media (max-width: 768px) {
    
  }
    
  h2{
    position:absolute;
    right:30px;
    font-size:4em;
    font-weight:bolder;
    color:#084bd0;
    z-index:1;
    opacity:0.3;
    transition:all ease-in-out 0.5s;
  }

  h3{
    position:relative;
    font-size:1.5em;
    color:#084bd0;
    z-index:2;
    opacity:.5;
    transition:0.5s;
    letter-spacing:1px;
  
  }

  p{
    position:relative;
    font-size:1.4rem;
    color:#ccc;
    z-index:2;
    opacity:.5;
    transition:0.5s;
    letter-spacing:1px;
    padding:3px 6px;
  
  }

  button{
    border:1px solid #084bd0;
    background:none;
    margin:30px 0px 0px 0px;
    outline:none;
    font-size:1.5rem;
    font-weight:bolder;
    border-radius:10px;
    width:60%;
    height:50px;
    background-color:#fff;
    color:#084bd0;
    opacity:0;
    transition:all .5s ease-in-out;
    &:hover{
    background-color:#084bd0;
    color:#fff;
  }
  }
  
`;