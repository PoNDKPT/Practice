import React from 'react';
import { VscDashboard, VscHome } from 'react-icons/vsc';

const ListItem = () => {
  return (
    <>
      <details open>
        <summary className="font-bold py-3 text-gray-700 dark:text-gray-400 text-sm tracking-wider ">
          Main Menu
        </summary>
        <ul>
          <li className="flex py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
            <VscDashboard size={'1.4em'} />
            <span>Dashboard</span>
          </li>
          <li className="flex py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
            <VscHome size={'1.4em'} />
            <span>Invoices</span>
          </li>
          <li className="flex py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
            <VscHome size={'1.4em'} />
            <span>Clients</span>
          </li>
        </ul>
      </details>
      <details open>
        <summary className="font-bold py-3 text-gray-700 dark:text-gray-400 text-sm tracking-wider ">
          My Profile
        </summary>
        <ul>
          <li className="flex py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
            <VscHome size={'1.4em'} />
            <span>Home</span>
          </li>
          <li className="flex py-2 px-3 mb-2 text-gray-700 dark:text-gray-100 rounded-lg font-medium">
            <VscHome size={'1.4em'} />
            <span>Home</span>
          </li>
        </ul>
      </details>
    </>
  );
};

export default ListItem;
