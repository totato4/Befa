type Props = {
  img: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ img, showModal, setShowModal }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Show = (e: any) => {
    e.stopPropagation();
    setShowModal(false);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={Show}
      onClick={Show}
      className={
        showModal
          ? 'fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full h-full  bg-black bg-opacity-50 z-50  transition-all ease-in-out scale-100'
          : ' scale-75 transition-all ease-in-out hidden'
      }
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 flex "
      >
        <img src={img} className="rounded-lg" alt="opened ModalPicture" />
      </div>
    </div>
  );
};

export default Modal;
