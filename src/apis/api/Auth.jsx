import { axiosApiInstance } from '../utils/Config';

export const signUp = async (data) => {
  try {
    const response = await axiosApiInstance.post('/auth/signup', data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data) => {
  try {
    const response = await axiosApiInstance.post('/auth/signin', data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
