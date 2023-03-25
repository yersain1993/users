import React from 'react';

const UsersForm = ({
  handleCreateUpdate,
  idUserToUpdate,
  register,
  handleSubmit,
  reset,
  closeForm,
  setId,
}) => {
  const emptyValueForm = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
  };

  const clearForm = () => {
    reset(emptyValueForm);
    setId(null);
  };

  const myHandleSubmit = async (data) => {
    await handleCreateUpdate(data);
    reset(emptyValueForm);
  };

  return (
    <form className="flex flex-col gap-3 mb-5" onSubmit={handleSubmit(myHandleSubmit)}>
      <button
        type="button"
        className="text-end text-[#555A88] font-bold text-xl"
        onClick={() => {
          closeForm();
          clearForm();
        }}
      >
        cerrar
      </button>
      <h1 className="text-center text-4xl font-bold">
        {idUserToUpdate ? 'Editar' : 'Nuevo '} usuario
      </h1>
      <div className="flex flex-col">
        <label htmlFor="nameId">Nombre: </label>
        <input
          type="text"
          id="nameId"
          className="text-black"
          placeholder={`Ejm: Juan`}
          {...register('first_name')}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastnameId">Apellidos: </label>
        <input
          type="text"
          id="lastnameId"
          className="text-black"
          placeholder={'Ejm: Arenas'}
          {...register('last_name')}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="emailId">Correo: </label>
        <input
          type="text"
          id="emailId"
          className="text-black"
          placeholder="Ejm: xxxx@email.com"
          {...register('email')}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="passwordId">Contraseña: </label>
        <input
          type="password"
          id="passwordId"
          className="text-black"
          placeholder="Minimo 8 caracteres"
          {...register('password')}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="releaseDateId">Cumpleaños: </label>
        <input
          type="date"
          id="releaseDateId"
          className="text-black"
          {...register('birthday')}
        />
      </div>

      <button type="submit" className="rounded bg-[#555A88] text-white w-72">
        {idUserToUpdate ? 'Guardar cambio' : 'Agregar nuevo usuario'}
      </button>
    </form>
  );
};

export default UsersForm;
