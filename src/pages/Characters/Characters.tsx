import React, { FC } from 'react';
import styled from 'styled-components';
import Cards from './Cards/Cards';
import { useGetPeopleQuery } from '../../api/api.people/api.people';
import Header from '../../Components/Header/Header';

const CharactersComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 200px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Characters: FC = () => {
  const { data, isLoading } = useGetPeopleQuery('people');
  return (
    <CharactersComponent>
      <Header />
      <Body>
        <Cards cards={data?.results} isLoading={isLoading} />
      </Body>
    </CharactersComponent>
  );
};

export default Characters;
