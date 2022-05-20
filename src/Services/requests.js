import axios from 'axios';

export const requestLogin = async (email, password) => {
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3080/login/',
    data: {
      email,
      password,
    },
  });

  return data;
};

export const requestTasks = async (id) => {
  const { data } = await axios({
    method: 'get',
    url: `http://localhost:3080/tasks/${id}`,
  });

  return data;
};

export const requestDeleteTask = async (id) => {
  await axios({
    method: 'delete',
    url: `http://localhost:3080/tasks/${id}`,
  });
};
