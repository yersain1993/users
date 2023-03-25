import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import { getUsers, createUser, deleteUser, updateUser } from './services';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idUserToUpdate, setIdUserToUpdate] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const handleClickOff = () => {
    setIsFormVisible(false);
    console.log(isFormVisible);
  };

  const loadUsers = async () => {
    try {
      setIsLoading(true);

      const usersFromBackend = await getUsers();
      console.log(usersFromBackend);
      setUsers(usersFromBackend);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateUpdate = async (dataForm) => {
    setIsLoading(true);

    if (idUserToUpdate) await updateUser(idUserToUpdate, dataForm);
    else await createUser(dataForm);

    setIsFormVisible(false);
    await loadUsers();

    setIdUserToUpdate(null);

    setIsLoading(false);
  };

  const userDataToForm = (userData) => {
    console.log(userData);
    const { id, ...data } = userData;
    reset(data);
    setIdUserToUpdate(id);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="bg-white h-screen">
      <Navbar visibleForm={handleClick} />
      <div className="flex flex-col justify-center items-center text-white">
        <UserList
          users={users}
          isLoading={isLoading}
          userDataToForm={userDataToForm}
          deleteUser={handleDeleteUser}
          visibleForm={handleClick}
        />
      </div>
      <Modal isVisible={isFormVisible}>
        <div>
          <UsersForm
            handleCreateUpdate={handleCreateUpdate}
            idUserToUpdate={idUserToUpdate}
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
            closeForm={handleClickOff}
            setId={setIdUserToUpdate}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
