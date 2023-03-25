import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="absolute inset-0 h-screen py-96 flex flex.row justify-center items-center bg-[rgb(0,0,0,0.6)]">
          <div className="bg-white py-3 px-5">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
