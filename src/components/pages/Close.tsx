import React, { useCallback, useState } from "react";
import "src/styles/close.scss";


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

interface Item {
    name: string;
    color: string;
  }
  
  interface ListComponentProps {
    itemList: Item[];
    selectedItems: Set<string>;
    onItemClick: (itemName: string) => void;
  }
  
  const List: React.FC<ListComponentProps> = ({ itemList, selectedItems, onItemClick }) => (
    <>
      <ul className="List">
        {itemList.map(item => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color} ${selectedItems.has(item.name) ? 'List__item--selected' : ''}`}
            onClick={() => onItemClick(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items: Item[] = sizes.reduce<Item[]>(
  (sizeList, size) => [
    ...sizeList,
    ...fruits.reduce<Item[]>(
      (fruiteList, fruit) => [
        ...fruiteList,
        ...colors.reduce<Item[]>(
          (colorList, color) => [
            ...colorList,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const Close = () => {
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  
    const handleItemClick = useCallback((itemName: string) => {
      setSelectedItems(prevSelectedItems => {
        const newSelectedItems = new Set(prevSelectedItems);
        if (newSelectedItems.has(itemName)) {
          newSelectedItems.delete(itemName);
        } else {
          newSelectedItems.add(itemName);
        }
        return newSelectedItems;
      });
    }, []);
  
    return (
      <>
        <div className="SelectedItems">
          {Array.from(selectedItems).join(', ')}
        </div>
        <List itemList={items} selectedItems={selectedItems} onItemClick={handleItemClick} />
      </>
    );
  };

export default Close;