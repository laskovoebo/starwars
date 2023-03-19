import React, { FC } from 'react';
import styled from 'styled-components';
import { IPersonalStats } from './types';

const PersonalStatsComponent = styled.div`
  display: flex;
  align-items: center;
`;

const Gender = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  background-color: ${props => props.backgroundColor};
  border-radius: 11px;
  padding: 3px 7px;
  margin-right: 13px;
`;

const Birthdate = styled.div`
  display: flex;
  width: 74px;
  height: 16px;
  justify-content: center;
  align-items: center;
  background: #07d6f2;
  border-radius: 11px;
  padding: 3px 7px;
`;

const PersonalStats: FC<IPersonalStats> = ({ gender, birthdate }) => {
  let backgroundColor = '';
  switch (gender) {
    case 'male':
      backgroundColor = '#73D677';
      break;
    case 'female':
      backgroundColor = '#C956FF';
      break;
    case 'hermaphrodite':
      backgroundColor = '#F5DB13';
      break;
    case 'n/a':
      return <Birthdate>{birthdate}</Birthdate>;
    default:
      backgroundColor = '#FFFFFF';
  }

  return (
    <PersonalStatsComponent>
      <Gender backgroundColor={backgroundColor}>
        <span>{gender}</span>
      </Gender>
      <Birthdate>{birthdate}</Birthdate>
    </PersonalStatsComponent>
  );
};

export default PersonalStats;
