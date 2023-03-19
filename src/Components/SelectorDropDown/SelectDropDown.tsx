import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Item, Props } from './types';

const SelectDropDownComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 23px;
  background: #f2f2f2;
  border-radius: 4px;
  cursor: pointer;
`;

const PaperDropDownComponent = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  z-index: 1000;
  top: 33px;
`;

const SelectItem = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ selected }) => (selected ? 'red' : 'none')};

  :hover {
    background: #a5a5a5;
  }
`;

const SelectDropDown: FC<Props> = ({
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const isAllSelected = selectedItem?.label === 'All';

  const selectItem = (item: Item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <SelectDropDownComponent onClick={toggleDropDown}>
      {selectedItem?.label ?? 'All'}
      {isOpen && (
        <PaperDropDownComponent>
          {[{ id: -1, label: 'All' }, ...items]
            .filter(item => isAllSelected || item !== selectedItem)
            .map(item => (
              <SelectItem
                key={item.id}
                selected={item === selectedItem}
                onClick={() => selectItem(item)}
              >
                {item.label}
              </SelectItem>
            ))}
        </PaperDropDownComponent>
      )}
    </SelectDropDownComponent>
  );
};

export default SelectDropDown;
