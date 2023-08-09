import { axiosAuthApiInstance } from '../utils/Config';

export const createTodo = async (data) => {
  try {
    const response = await axiosAuthApiInstance.post('/todo', data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await axiosAuthApiInstance.get('/todo');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, data) => {
  try {
    const response = await axiosAuthApiInstance.put(`/todo/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axiosAuthApiInstance.delete(`/todo/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
