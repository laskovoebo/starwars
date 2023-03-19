export interface Item {
  id: number;
  label: string;
}

export interface Props {
  items: Item[];
  selectedItem?: Item;
  setSelectedItem: (arg: Item) => void;
}
