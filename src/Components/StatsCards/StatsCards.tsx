import React, { FC } from 'react';
import styled from 'styled-components';
import { IStatsCarsProps } from './types';

const StatsCardsComponent = styled.div`
  display: flex;
  margin-top: 18px;
  margin-bottom: 9px;
`;

const Stats = styled.div<{ bgColor: string; color: string }>`
  display: flex;
  flex-direction: column;
  margin-right: 13px;
  background: ${props => props.bgColor};
  color: ${props => props.color};
`;

const Circle = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border: 3px solid ${props => props.color};
  border-radius: 50%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`;

const StatsName = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin: 6px auto 0;
`;

const StatsCards: FC<IStatsCarsProps> = ({ height, mass, bgColor, color }) => (
  <StatsCardsComponent>
    <Stats bgColor={bgColor} color={color}>
      <Circle color={color}>{height}</Circle>
      <StatsName>Height</StatsName>
    </Stats>
    <Stats bgColor={bgColor} color={color}>
      <Circle color={color}>{mass}</Circle>
      <StatsName>mass</StatsName>
    </Stats>
  </StatsCardsComponent>
);

export default StatsCards;
