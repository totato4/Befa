import { useState, useRef, useEffect } from 'react';
import Item from './Item/Item';
import { Iarray } from '../types/types';
import { imgArray } from '../assets/static';

const Main = () => {
  const array: Iarray[] = imgArray.slice(0, 4);

  const [imgArrayState, setImg] = useState(array);

  const [show, setShow] = useState(false);

  const toHide = () => {
    const array1: Iarray[] = imgArray.slice(0, 4);
    setShow(false);
    setImg(array1);
  };

  const toShow = () => {
    const array2: Iarray[] = imgArray;
    setShow(true);
    setImg(array2);
  };

  // ScrollTo Logic
  const imagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    imagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [imgArrayState]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  //

  return (
    <main
      className=" mx-auto
      xl:pt-[114px]  lg:pt-[91.2px] md:pt-[68.4px] sm:pt-[105px] pt-[105px]
    xl:mb-[179px] lg:mb-[120px] md:mb-[67px] sm:mb-[67px] mb-[67px]
    "
    >
      <div className="container mx-auto max-w-contWidth relative md:px-[10px] ">
        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] z-2 text-center text-white font-BlackHanSans">
          <div className="mt-auto mb-auto">
            <h3 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm text-xs select-none">
              Hello, i am
            </h3>
            <h1
              className="
            xl:text-[220px] lg:text-[200px] md:text-[150px] sm:text-[60px] text-[50px]   select-none
            "
            >
              BefaArt.
            </h1>
          </div>
        </div>

        <div
          className="grid align-middle justify-center
        md:gap-x-[3.59712230216%]  md:grid-cols-colHelloContainer
        gap-x-[21px] grid-cols-colHelloContainer3"
        >
          <div
            className="grid
          md:gap-y-[8.94308943089%] md:grid-rows-rowHelloLeft
          gap-y-[22px] grid-rows-rowHelloLeft2"
          >
            <div className=" bg-white ">
              <img
                className="md:block hidden  "
                src="img/img-1.jpg"
                alt="image1"
              />
              <img
                className="md:hidden block"
                src="img/img-main-1.jpg"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                className="md:block hidden"
                src="img/img-3.jpg"
                alt="image3"
              />
              <img
                className="md:hidden block"
                src="img/img-main-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            className="grid md:grid-rows-rowNN
          grid-rows-[590px]
          "
          >
            <div className="">
              <img
                className="md:block hidden "
                src="img/img-2.jpg"
                alt="image2"
              />
              <img
                className="md:hidden block"
                src="img/img-main-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container flex justify-end self-center ml-auto mt-[126px] mb-[40px]"
        ref={imagesEndRef}
      >
        <p className="text-white text-base md:text-[24px] md:leading-[1.8869rem] whitespace-nowrap select-none">
          My portfolio
        </p>
        <div className=" ml-[22px]  my-auto md:w-auto w-16 overflow-x-hidden">
          <svg
            width="289"
            height="1"
            viewBox="0 0 289 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="289" height="1" fill="white" />
          </svg>
        </div>
      </div>
      <div className=" relative container md:mx-auto max-w-contWidth ">
        <div className="absolute top-[-100px]" />
        <div className=" grid md:grid-cols-colPortfolio   md:gap-mainImg1   md:pt-[35px]  grid-cols-1  gap-y-8 pt-6 mx-[21px]">
          {imgArrayState.map((obj: Iarray, i: number) => (
            <Item
              key={i.toString()}
              i={i + 45241241}
              img={obj.img}
              name={obj.name}
              subtitle={obj.subtitle}
              title={obj.title}
            />
          ))}
        </div>
      </div>
      {show ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => toHide()}
          onKeyDown={() => toHide()}
          className="w-full flex justify-center"
        >
          <button
            type="button"
            tabIndex={0}
            className=" select-none cursor-pointer hover:bg-white hover:text-black hover:border-black hover:rounded-md w-[225px] duration-100 h-[65px] text-white border-solid border-white border-[1px] text-center mt-[58px] mb-[125px] place-content-center"
          >
            Hide works
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <button
            type="button"
            tabIndex={0}
            onKeyDown={() => toShow()}
            onClick={() => toShow()}
            className=" select-none cursor-pointer hover:bg-white hover:text-black hover:border-black hover:rounded-md w-[225px] duration-100 h-[65px] text-white border-solid border-white border-[1px] text-center mt-[58px] mb-[125px] place-content-center"
          >
            Load more
          </button>
        </div>
      )}

      <div className="container flex justify-start self-center mr-auto mt-[125px] mb-[54px] ">
        <div className=" mr-[20px]  my-auto   w-16 overflow-hidden ">
          <svg
            width="245"
            height="1"
            viewBox="0 0 245 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="245" height="1" fill="white" />
          </svg>
        </div>
        <div className="text-white text-sm md:text-[24px] md:leading-[1.8869rem] whitespace-nowrap select-none">
          About me
        </div>
      </div>
      <div className="w-full relative xl:h-[720px] overflow-hidden">
        <div className="flex">
          <div className="z-20 xl:pt-[102px] xl:pr-5 lg:pt-[89px] lg:pr-3 md:pt-[73px] md:pr-2 pt-[135px] pr-[6px] ">
            <div
              className="flex md:hidden
            "
            >
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="28" fill="#B91616" />
              </svg>
            </div>
            <div className="md:flex lg:hidden hidden">
              <svg
                width="122"
                height="35"
                viewBox="0 0 122 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="122" height="35" fill="#B91616" />
              </svg>
            </div>
            <div className="lg:flex hidden">
              <svg
                width="245"
                height="45"
                viewBox="0 0 245 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="245" height="45" fill="#B91616" />
              </svg>
            </div>
          </div>
          <span
            className="text-white font-Poppins align-middle select-none  z-20
          xl:pt-[96px] xl:text-[80px] xl:w-[1150px]   pt-[127px]
          lg:pt-[77px] lg:text-[65px]
          md:text-[52px] md:w-auto md:pt-[55px] md:leading-[70px]
          sm:w-[450]
          text-[40px] leading-[44.12px] h-[630px] w-[358px]
          "
          >
            <span>I,</span>
            <span className="text-[#B91616]">Befa</span>
            <span>
              , put mine artistic abstracts Works before. These art pictures
              show the whole spectrum of my inner joy, spiritual Mood,
              immeasurable Joy for life.
            </span>
          </span>
          <div
            className="absolute
          xl:w-[985px] xl:h-[720px]
          lg:w-[985px] lg:h-[720px] lg:translate-x-40
          md:opacity-80 md:w-[750] md:translate-x-40
          opacity-50 h-[630px] right-0
          "
          >
            <img className="md:block hidden" src="img/img-0.jpg" alt="" />
            <img className="md:hidden block" src="img/img-0-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
