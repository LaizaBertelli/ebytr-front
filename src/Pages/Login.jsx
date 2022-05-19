/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import '../Styles/Pages/Login.css';
import requestLogin from '../Services/requests';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function Login() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isePassValid, setIsPassValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (target) => {
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') setPassword(target.value);
  };

  const handleClick = async () => {
    const { token } = await requestLogin(email, password);
    if (token) {
      setIsLogged(true);
      localStorage.setItem('token', token);
    }
  };

  useEffect(() => {
    if (EMAIL_REGEX.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (password.length > 4) {
      setIsPassValid(true);
    } else {
      setIsPassValid(false);
    }

    if (isEmailValid && isePassValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  });

  if (isLogged) navigate('/tasks');

  return (
    <div className="login_main">
      <div className="login_forms">
        <h1>Login</h1>
        <div>
          <label className="label" ftmlFor="email">Email</label>
          <input className="input" id="email" type="email" name="email" onKeyUp={(event) => handleChange(event.target)} />
          <label className="label" htmlFor="password">Password</label>
          <input className="input" id="password" type="password" name="password" onKeyUp={(event) => handleChange(event.target)} />
        </div>
        <Button disabled={isButtonDisabled} text="Entrar" onClick={handleClick} />
      </div>
      <p>Não tem uma conta? Cadastre-se aqui</p>
    </div>
  );
}

export default Login;
