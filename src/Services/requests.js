import axios from 'axios';

export const requestLogin = async (email, password) => {
  const { data } = await axios({
    method: 'post',
    url: 'https://lb-task-manager.herokuapp.com/login',
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
    url: `https://lb-task-manager.herokuapp.com/tasks/${id}`,
  });

  return data;
};

export const requestCreateTask = async (userId, status, description, title) => {
  const { data } = await axios({
    method: 'post',
    url: `https://lb-task-manager.herokuapp.com/tasks/${userId}`,
    data: {
      userId,
      status,
      description,
      title,
    },
  });
  console.log(data);
  return data;
};

export const requestDeleteTask = async (id) => {
  await axios({
    method: 'delete',
    url: `https://lb-task-manager.herokuapp.com/tasks/${id}`,
  });
};
