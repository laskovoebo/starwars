import React, { FC } from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import logo from '../../assets/images/Logo.png';
import { colors } from '../../variables/variables';

const HeaderComponent = styled.div`
  display: flex;
  width: 100%;
  height: 93px;
  background: ${colors.headerBg};
`;

const Logo = styled.img``;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 157px;
`;

const Header: FC = () => (
  <HeaderComponent>
    <Container>
      <Logo src={logo} />
      <HeaderMenu />
    </Container>
  </HeaderComponent>
);

export default Header;
