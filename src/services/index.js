import axios from 'axios';

const BASE_URL = 'https://users-crud-wjes.onrender.com/';

export const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'user/');
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (dataUser) => {
  try {
    await axios.post(BASE_URL + 'user/', dataUser);

    console.log('Se creo existosamente');
  } catch (error) {
    console.loge(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `user/${userId}/`);
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, newUserData) => {
  try {
    await axios.put(BASE_URL + `user/${userId}/`, newUserData);
    console.log(`El usuario ${newUserData.first_name} fué actualizado`);
  } catch (error) {
    console.error(error);
  }
};
