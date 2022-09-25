import { useState } from 'react';
import Avatar from './Avatar';
import ListItem from './ListItem';
import DarkMode from './DarkMode';
import './styles.css';
import logo from '../../logo.svg';

// Utils
// import { sideBarData } from '../../utils/Sidebar';

// Interface
interface SidebarProps {
  avatar: string;
  firstName: string;
  lastName: string;
}

const Sidebar = ({ avatar, firstName, lastName }: SidebarProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={`${toggle ? 'dark' : ''}`}>
      <div
        className={
          'w-72 overflow-hidden h-screen relative px-6 border-r bg-gray-100 dark:bg-slate-800 dark:text-gray-200'
        }
      >
        <div className="flex items-center border-b dark:bg-slate-800">
          <img src={logo} alt="logo" className="w-20 aspect-square" />
          <span className="font-bold text-xl">Dashboard</span>
        </div>
        <Avatar avatar={avatar} firstName={firstName} lastName={lastName} />
        <div className="overflow-y-scroll h-[calc(100%-15rem)] pt-5 hide-scroll">
          <ListItem />
          {/* Footer Sidebar */}
          <div className="py-4 px-6 dark:bg-slate-800 flex justify-between items-center w-full h-20 absolute inset-x-0 bottom-0 border-t">
            <span className="font-medium text-sm">
              {toggle ? 'Dark' : 'Light'} Mode
            </span>
            <DarkMode toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
