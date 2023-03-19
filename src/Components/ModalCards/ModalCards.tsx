import React, { FC } from 'react';
import styled from 'styled-components';
import { IModalProps } from './types';
import avatarMale from '../../assets/images/Avatars/avatap-male.png';
import avatarFemale from '../../assets/images/Avatars/avatar-female.png';
import avatarHrm from '../../assets/images/Avatars/avatar-hermaphrodite.png';
import PersonalStats from '../PersonalStats/PersonalStats';
import StatsCards from '../StatsCards/StatsCards';

const ModalCardsComponent = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #212121;
  opacity: 0.5;
  z-index: 1;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  width: 797px;
  height: 371px;
  background: linear-gradient(180deg, #17002f 42.19%, #1f2a63 100%);
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  z-index: 2;
  color: white;
  border-radius: 16px;
  .container {
    position: absolute;
    bottom: 15px;
    right: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 16px;
    background-color: white;
    top: 4px;
    left: 10px;
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const AvatarProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 365px;
  height: 100%;
  background: #1f2a63;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 16px 0 0 16px;
`;

const Avatar = styled.img``;

const DescriptionProfile = styled.div`
  padding-left: 13px;
`;

const PersonName = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 23px;
`;

const PersonAppearance = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 264px;
  height: 104px;
  background: white;
  color: black;
  border-radius: 8px;
  padding-left: 25px;
  margin-bottom: 106px;
`;

const ModalCards: FC<IModalProps> = ({ isOpen, onClose, card }) => {
  let currentAvatar = '';
  switch (card?.gender) {
    case 'female':
      currentAvatar = avatarFemale;
      break;
    case 'male':
      currentAvatar = avatarMale;
      break;
    case 'hermaphrodite':
      currentAvatar = avatarHrm;
      break;
    default:
      currentAvatar = avatarHrm;
      break;
  }
  return (
    <ModalCardsComponent isOpen={isOpen}>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <AvatarProfile>
          <Avatar src={currentAvatar} />
          <div className="container">
            <PersonalStats gender={card?.gender} birthdate={card?.birth_year} />
          </div>
        </AvatarProfile>
        <DescriptionProfile>
          <PersonName>{card?.name}</PersonName>
          <PersonAppearance>
            <span>Hair color: {card?.hair_color}</span>
            <span>Skin color: {card?.skin_color}</span>
            <span>Eye color: {card?.eye_color}</span>
          </PersonAppearance>
          <StatsCards
            height={card?.height}
            mass={card?.mass}
            bgColor="transparent"
            color="white"
          />
        </DescriptionProfile>
        <CloseButton onClick={onClose} />
      </ModalContent>
    </ModalCardsComponent>
  );
};

export default ModalCards;
