import React from 'react';
import deleteImage from '../assets/svg/delete.svg';
import editImage from '../assets/svg/edit.svg';

const UserCard = ({ user, userDataToForm, deleteUser, visibleForm }) => {
  return (
    <section className="box-border border-solid border-2 border-gray-400 rounded-md bg-white w-72 h-72 mt-3 text-black ">
      <ul>
        <li>
          <h2 className="text-center font-medium text-3xl mt-5">
            {user.first_name} {user.last_name}
          </h2>
        </li>
        <hr className="mt-4  w-11/12 m-auto" />
        <li className=" ml-5">
          <span className="text-gray-400"> CORREO </span> <br />
          {user.email}
        </li>
        <li className=" ml-5">
          <span className="text-gray-400"> CUMPLEAÑOS </span> <br />
          {user.birthday}
        </li>
        <hr className="mt-4 w-11/12 m-auto" />
        <div className="mt-5 flex flex-row justify-end gap-3 mr-4">
          <button onClick={() => deleteUser(user.id)}>
            <img src={deleteImage} alt={deleteImage} />
          </button>
          <button
            onClick={() => {
              visibleForm();
              userDataToForm(user);
            }}
          >
            <img src={editImage} alt={editImage} />
          </button>
        </div>
      </ul>
    </section>
  );
};

export default UserCard;
