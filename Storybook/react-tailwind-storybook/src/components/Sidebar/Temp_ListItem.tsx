import React from 'react';
import { VscHome } from 'react-icons/vsc';

interface ItemProps {
  mainMenu: {
    items: Array<string>;
  };
  myProfile: {
    items: Array<string>;
  };
}

const ListItem = ({ mainMenu, myProfile }: ItemProps) => {
  return (
    <>
      <details>
        <summary className="font-bold py-3 text-gray-700 dark:text-gray-400 text-sm tracking-wider ">
          Main Menu
        </summary>
        {mainMenu.items.map((item, index) => {
          return (
            <details key={index}>
              <summary className="py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
                <VscHome size={'1.4em'} />
                <span>{item}</span>
              </summary>
            </details>
          );
        })}
      </details>
      <details open>
        <summary className="font-bold py-3 text-gray-700 dark:text-gray-400 text-sm tracking-wider ">
          My Profile
        </summary>
        {myProfile.items.map((item, index) => {
          return (
            <details key={index}>
              <summary className="py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
                <VscHome size={'1.4em'} />
                <span>{item}</span>
              </summary>
            </details>
          );
        })}
      </details>
    </>
  );
};

export default ListItem;
