import { useState, useRef, useEffect } from 'react';
import Modal from '../modal';
import InfoButton from './InfoButton';

type PopupClick = React.MouseEvent<HTMLBodyElement> & { path: Node[] };
type Props = {
  name: string;
  img: string;
  title: string;
  subtitle: string;
  i: number;
};

const Item = ({ name, img, title, subtitle, i }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const Event = e as MouseEvent & PopupClick;
      if (sortRef.current && !Event.composedPath().includes(sortRef.current)) {
        setShowModal(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        ref={sortRef}
        className={`max-w-[670px] group ${
          i % 2 === 0 ? 'md:mt-[-35px]' : ''
        } mx-auto relative text-white `}
        onClick={() => setShowModal(true)}
        onKeyUp={() => setShowModal(true)}
      >
        <img className="w-full" src={img} alt="image2" />
        <div
          className={`absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full h-full group-hover:bg-opacity-50 group-hover:bg-black
          `}
        >
          {showInfo ? (
            <div className="absolute top-0 left-0 w-[90%] h-full sm:text-xl md:text-lg text-xl lg:text-xl z-0 overflow-hidden">
              <span className="absolute top-[10%] left-[10%] text-white text-opacity-80">
                {title}
              </span>
              <span className="absolute top-[30%] left-[10%] w-[85%] md:text-base lg:text-xl  ">
                {subtitle}
              </span>
            </div>
          ) : (
            <span
              className={`absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  md:text-4xl text-2xl BlackHanSans  font-bold bg-opacity-50
            group-open:hidden`}
            >
              {name}
            </span>
          )}

          <InfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
        </div>
      </div>
      <Modal
        key={i + 1}
        img={img}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Item;
