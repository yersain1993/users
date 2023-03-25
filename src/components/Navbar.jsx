import React from 'react';

const Navbar = ({ visibleForm }) => {
  return (
    <nav className="flex mt-6 ml-4 gap-6 w-full">
      <h2 className="font-bold text-4xl text-center">
        <span>Usuarios</span>
      </h2>
      <button
        className="flex flex-col justify-center items-center bg-indigo-800 rounded-sm border-solid border-2 border-violet-600 w-44 h-11 sm-[654px]:ml-64 md:ml-96 lg:ml-[600px] xl:ml-[920px]"
        onClick={visibleForm}
      >
        <p className="text-violet-300 text-center"> + Crear nuevo usuario </p>
      </button>
    </nav>
  );
};

export default Navbar;
