import React, { FC } from 'react';
import styled from 'styled-components';
import PersonalStats from '../../../../Components/PersonalStats/PersonalStats';
import StatsCards from '../../../../Components/StatsCards/StatsCards';

const CardsItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 353px;
  height: 137px;
  border-radius: 8px;
  padding-left: 26px;
  background: #f0f0f0;
  padding-bottom: 10px;
  :hover {
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  }
`;

const PersonName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const CardsItem: FC<any> = ({ card, modalOpen }) => (
  <CardsItemComponent onClick={modalOpen}>
    <PersonName>{card.name}</PersonName>
    <StatsCards
      height={card.height}
      mass={card.mass}
      bgColor="transparent"
      color="black"
    />
    <PersonalStats gender={card.gender} birthdate={card.birth_year} />
  </CardsItemComponent>
);

export default CardsItem;
