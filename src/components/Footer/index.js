import React from 'react';

import { Container, IconWrap, SocialMedia } from './styles';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/all';
function Footer() {
  return (<>
  
  <Container>
    <SocialMedia>
      <IconWrap>
        <FaTwitter>
          <a href=""></a>
        </FaTwitter>
        <FaFacebook>
          <a href=""></a>
        </FaFacebook>
        <FaInstagram>
          <a href=""></a>
        </FaInstagram>
        
      </IconWrap>
    </SocialMedia>
    <div>
      <p>copyright@ RenuevaPy Todos los derechos reservados / <span><a href="">Desarrolador por</a></span></p>
    </div>
  </Container>
  </>);
}

export default Footer;