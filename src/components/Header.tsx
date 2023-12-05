import { useState } from 'react';
import { MenuItems } from '../types/types';
import MobMenu from './MobMenu';

const items: MenuItems = [
  {
    value: 'Home',
    href: '#',
  },
  {
    value: 'My portfolio',
    href: '#',
  },
  {
    value: 'About me',
    href: '#',
  },
  {
    value: 'Contacts',
    href: '#',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const OpenBtn = () => {
    setShowMenu(true);
  };

  const CloseBtn = () => {
    setShowMenu(false);
  };

  return (
    <header className="bg-headRed max-w-full z-50">
      <nav className="md:hidden">
        <div className="flex justify-between p-5 h-[60px] fixed top-0 w-full bg-headRed z-50">
          <button type="button" className="flex z-50 ">
            <p className="text-white text-[16px] leading-[19.2px] font-black select-none">
              BefaArt
            </p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
            </svg>
          </button>

          {showMenu ? (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => CloseBtn()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="1.73894"
                  height="20.8673"
                  rx="0.86947"
                  transform="matrix(0.707381 -0.706833 0.707381 0.706833 0 1.25049)"
                  fill="white"
                />
                <rect
                  width="1.73894"
                  height="20.8673"
                  rx="0.869471"
                  transform="matrix(-0.707782 -0.706431 -0.707782 0.706431 16 1.22845)"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => OpenBtn()}
              className="z-50 w-[20px]  color:white h-4  relative cursor-pointer
          after:content[''] after:top-0 after:right-0 after:absolute after:w-[7.11px] after:border:white after:border-[1.11px] after:rounded-lg after:bg-white
          before:content[''] before:top-[12.88px] before:right-0 before:absolute before:w-[12.44px] before:border-white  before:border-[1.11px] before:rounded-lg before:bg-white
          "
            >
              <span className="top-[6.44px] right-0 absolute w-[15.56px] border-white border-[1.11px] rounded-lg bg-white " />
            </button>
          )}
        </div>
        <MobMenu items={items} showMenu={showMenu} />
      </nav>
      <nav className="md:block hidden">
        <ul
          className=" container mx-auto max-w-contWidth flex flex-row justify-center h-24 relative
        xl:text-[18px] xl:leading-[1.35rem] lg:text-base md:text-sm text-xs xl:gap-20 lg:gap-14 md:gap-12 gap-10 font-Poppins items-center font-medium select-none"
        >
          <li className="     text-whiteText">Home</li>
          <li className="     text-whiteText">My portfolio</li>
          <li className=" font-black text-[24px] leading-[1.8rem] flex flex-row place-content-center  text- text-white">
            <p className="text-white">BefaArt</p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
            </svg>
          </li>
          <li className="     text-white">About</li>
          <li className="     text-white">Contacts</li>
          <button
            type="button"
            className=" text-center justify-center     flex  absolute xl:right-[50px] lg:right-[30px] right-[15px] cursor-pointer  text-white"
          >
            <div className="mr-[9px]">ENG</div>
            <div className="mt-auto mb-auto">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02232 7.83482C6.93304 7.92411 6.83036 7.96875 6.71429 7.96875C6.59821 7.96875 6.49554 7.92411 6.40625 7.83482L0.165179 1.59375C0.0758929 1.50446 0.0312501 1.40179 0.0312501 1.28571C0.0312501 1.16964 0.0758929 1.06696 0.165179 0.977679L0.834822 0.308036C0.924107 0.21875 1.02679 0.174107 1.14286 0.174107C1.25893 0.174107 1.36161 0.21875 1.45089 0.308036L6.71429 5.57143L11.9777 0.308036C12.067 0.21875 12.1696 0.174107 12.2857 0.174107C12.4018 0.174107 12.5045 0.21875 12.5938 0.308036L13.2634 0.977679C13.3527 1.06696 13.3973 1.16964 13.3973 1.28571C13.3973 1.40179 13.3527 1.50446 13.2634 1.59375L7.02232 7.83482Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
