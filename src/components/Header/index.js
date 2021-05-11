import React from 'react';
import { Logo } from '../Logo';
import {useMediaQuery} from 'react-responsive';

import { Container, LeftSection, MiddleSection, RightSection } from './styles';
import NavLink from './../NavLink';
import Accesibility from '../Accesibility';
import {DeviceSizes} from './../Responsive';

import NavLinkMobile from './../NavLink/mobileVersion';

function Header(props) {

  const isMobile = useMediaQuery({maxWidth:DeviceSizes.mobileLarge})

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return <>
  <Container>
    <LeftSection
     initial="hidden"
     animate="visible"
     variants={variants}
     transition={{ duration: .5 , ease: "easeInOut"}}
    >
      <Logo/>
    </LeftSection>
    <MiddleSection
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1, ease: "easeInOut" }}
    > 
      {!isMobile && <NavLink/>}
    </MiddleSection>
    <RightSection
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1.5 , ease: "easeInOut"}}
    >
      {!isMobile && <Accesibility/>}
      {isMobile && <NavLinkMobile/>}
    </RightSection>
  </Container>
  </>;
}

export default Header;