import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:red;
`;

function Text({title, info}) {
  return (<>
  <Container>
     <h1>{title}</h1>
      <p>{info}</p>
  </Container>
  </>);
}

export default Text;