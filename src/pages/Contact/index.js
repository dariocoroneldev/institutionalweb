import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function contact() {
  return (
    <Container>
      <h1>Hola soy contacto</h1>
        <Link to='/'>vuelvo al home</Link>
    </Container>
  );
}

export default contact;