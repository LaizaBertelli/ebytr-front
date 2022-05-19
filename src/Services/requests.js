import axios from 'axios';

const requestLogin = async (email, password) => {
  const token = axios({
    method: 'post',
    url: 'https://lb-task-manager.herokuapp.com/login/',
    data: {
      email,
      password,
    },
  }).then((response) => response);

  return token;
};

export default requestLogin;
