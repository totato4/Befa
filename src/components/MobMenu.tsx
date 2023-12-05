import { Link } from 'react-router-dom';
import { MenuItems, MobMenuItems } from '../types/types';

// const item: MenuItems = [
//   {
//     value: 'Home',
//     href: '#',
//   },
//   {
//     value: 'My portfolio',
//     href: '#',
//   },
//   {
//     value: 'About me',
//     href: '#',
//   },
//   {
//     value: 'Contacts',
//     href: '#',
//   },
// ];
type Props = {
  items: MenuItems;
  showMenu: boolean;
};

const MobMenu = ({ items, showMenu }: Props) => (
  <div
    className={`fixed w-full h-full bg-headRed z-30 transition-transform duration-200
    ${showMenu ? 'translate-y-[0]' : 'translate-y-[-100%]'} }
    `}
  >
    <div
      className="
           grid gap-y-[45px] justify-center  content-center h-full w-full
      text-[42px] leading-[50.4px] font-Poppins font-medium text-white
      "
    >
      <ul className="grid gap-y-[45px]">
        {items &&
          items.map((item: MobMenuItems) => (
            <li key={item.value + 24124}>
              <Link to="/">{item.value}</Link>
            </li>
          ))}
        {}
      </ul>
    </div>
  </div>
);

export default MobMenu;
