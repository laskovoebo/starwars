import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../../assets/images/404.png';
import deathStar from '../../assets/images/teamRocket.png';

const NotFoundComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #17002f;
`;

const ImageGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotFoundImage = styled.img``;
const DeathStar = styled.img`
  position: absolute;
  width: 690px;
  height: 623px;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 66px;
  color: black;
  background: #73d677;
  border-radius: 11px;
  margin-top: 80px;
  text-decoration: none;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  :hover {
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  }
`;

const NotFound = () => (
  <NotFoundComponent>
    <ImageGroup>
      <NotFoundImage src={notFound} />
      <DeathStar src={deathStar} />
    </ImageGroup>
    <Button to="/">Return</Button>
  </NotFoundComponent>
);

export default NotFound;
