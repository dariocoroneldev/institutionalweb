import styled from 'styled-components';



export const Container = styled.div`
margin: 4rem 0rem;
display:flex;
flex-direction:column;
align-items:center;

h2{
  color:rgba(38,59,129,1);
  font-size:4rem;
  font-weight:bolder;
  text-align:center;
}

p{
  padding:0px 50px;
  height:auto;
  font-size:2rem;
  font-weight:normal;
  color:#cccc;
  margin:30px 10px;
  text-align:center;

  span{
    font-weight:bold;
    color:rgba(38,59,129,1);

  }
}

`;

export const CardsContainer = styled.div`
display:flex; 
flex-direction:column;
width:70%;

@media (min-width: 768px) {
   width:1000px;
   flex-direction:row;

   display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1px;
   
} 
`;

export const CardWraper = styled.div`

@media (max-width: 768px) {
width:120%;
height:400px;
margin-left:-20px;
   
}
width:60%;
height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:20px auto;
justify-content: space-between;
transition:all 400ms ease-in-out;


&:hover{
    filter: blur(0px);     

      div{
        background-color:rgba(38,59,129,1);

        p{
          color:#fff;
          font-weight:bold;
          /* margin:5px 5px; */
        }
        h2{
          color:#fff;
        }
      }
    }
  img{
    width:120px;
    height:auto;
  }

  div{
    display:flex;
    flex-direction:column;
    width:80%;
    align-items:center;
    height:300px;
    border-radius:10px;
    background-color:#fff;
    box-shadow: 4px 3px 8px #ccc;
    transition: all 200ms ease-in-out;
   
    h2{
      text-align:center;
      margin:20px 0px 0px 0px;
      text-align:center;
      font-size:2rem;
      color:#253c81;
      transition: all 400ms ease-in-out;

    }
    p{
      margin:20px 5px;
      text-align:center;
      font-size:1.2rem;
      transition: all 400ms ease-in-out;
      font-weight:lighter;
      position:relative;
      color:#ce2327;

      @media (max-width: 768px) {
      font-size:1.2rem;
   
}

    }

    

  }

  @media (min-width: 768px) {
    div{
      height:100%;
    }
  }


`;


