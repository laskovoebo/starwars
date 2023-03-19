import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMoreInfoProps } from './types';
import { colors } from '../../../variables/variables';

const MoreInfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  margin-left: 157px;
`;

const InfoContainer = styled.div`
  margin-bottom: 64px;
`;

const Title = styled.div`
  display: block;
  width: 500px;
  font-weight: 700;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  margin-bottom: 64px;
`;

const Description = styled.span`
  display: block;
  width: 435px;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 66px;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  background: ${colors.buttonHomePage};
  color: black;
  border-radius: 11px;
  text-decoration: none;
  :hover {
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  }
`;

const MoreInfo: FC<IMoreInfoProps> = ({
  title,
  description,
  buttonPlaceholder,
}) => (
  <MoreInfoComponent>
    <InfoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoContainer>
    <Button to="/characters">{buttonPlaceholder}</Button>
  </MoreInfoComponent>
);

export default MoreInfo;
