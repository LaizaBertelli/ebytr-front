import axios from 'axios';

const requestLogin = async (email, password) => {
  const token = axios({
    method: 'post',
    url: 'http://localhost:3080/login/',
    data: {
      email,
      password,
    },
  })
    .then((response) => response.data)
    .catch((error) => error.code);

  return token;
};

export default requestLogin;
