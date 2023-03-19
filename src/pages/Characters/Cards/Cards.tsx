import React, { FC, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import CardsItem from './CardsItem/CardsItem';
import { ICards } from './types';
import ModalCards from '../../../Components/ModalCards/ModalCards';
import SelectDropDown from '../../../Components/SelectorDropDown/SelectDropDown';
import { Item } from '../../../Components/SelectorDropDown/types';
import { colorsEye } from '../../../mocks/selectColorsEye';

const CardsComponent = styled.div`
  width: 1125px;
  margin: 0 auto;
  .containerSelector {
    display: flex;
    margin-bottom: 28px;
  }
  .spanSelector {
    margin-right: 18px;
  }
  .pagination {
    display: flex;
    width: 10%;
    justify-content: space-between;
    list-style: none;
  }
  .active {
    border: 2px solid black;
  }
  .pageNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    border-radius: 50%;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  margin-top: 78px;
  margin-bottom: 38px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  column-gap: 35px;
  row-gap: 45px;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
`;

const NoResultMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
`;

const Cards: FC<ICards> = ({ cards, isLoading }) => {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const CARDS_PER_PAGE = 9;

  const filteredCards = useMemo(
    () =>
      selectedItem && selectedItem.label !== 'All'
        ? cards?.filter(card => card.eye_color === selectedItem.label)
        : cards,
    [cards, selectedItem],
  );

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const pageCount = filteredCards
    ? Math.ceil(filteredCards?.length / CARDS_PER_PAGE)
    : Math.ceil(cards?.length / CARDS_PER_PAGE);

  return (
    <CardsComponent>
      <Title>{cards?.length} Peoples for you to choose your favorite</Title>
      <div className="containerSelector">
        <span className="spanSelector">Color eye: </span>
        <SelectDropDown
          items={colorsEye}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <Container>
        {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
        {!isLoading &&
          filteredCards &&
          filteredCards.length === 0 &&
          selectedItem?.label !== 'All' && (
            <NoResultMessage>
              No creatures found with this eye color
            </NoResultMessage>
          )}
        {!isLoading &&
          (filteredCards
            ? filteredCards.slice(
                currentPage * CARDS_PER_PAGE,
                (currentPage + 1) * CARDS_PER_PAGE,
              )
            : cards.slice(
                currentPage * CARDS_PER_PAGE,
                (currentPage + 1) * CARDS_PER_PAGE,
              )
          ).map((card, key) => (
            <CardsItem
              key={key}
              card={card}
              handleCardClick={handleCardClick}
            />
          ))}
      </Container>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'pageNumber'}
      />
      {selectedCard && (
        <ModalCards
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          card={selectedCard}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </CardsComponent>
  );
};

export default Cards;
