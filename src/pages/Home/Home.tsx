import React, { FC } from 'react';
import styled from 'styled-components';
import MoreInfo from './MoreInfo/MoreInfo';
import banner from '../../assets/images/banner.png';
import Header from '../../Components/Header/Header';
import { colors } from '../../variables/variables';

const HomeComponent = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  background: ${colors.homePageBg};
  color: white;
`;

const Body = styled.div`
  position: relative;
  display: flex;
`;

const Banner = styled.img`
  position: absolute;
  right: 0;
`;

const Home: FC = () => (
  <HomeComponent>
    <Header />
    <Body>
      <MoreInfo
        title={'Find all your favorite character'}
        description={
          'You can find out all the information about your favorite characters'
        }
        buttonPlaceholder={'See more...'}
      />
      <Banner src={banner} />
    </Body>
  </HomeComponent>
);

export default Home;
