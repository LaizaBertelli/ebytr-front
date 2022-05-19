import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import '../Styles/Pages/Login.css';

function Login() {
  return (
    <div className="login_main">
      <div className="login_forms">
        <h1>Login</h1>
        <Input id="email" type="email" name="email" value="" label="Email" />
        <Input id="password" type="password" name="password" value="" label="Password" />
        <Button text="Entrar" />
      </div>
      <p>Não tem uma conta? Cadastre-se aqui</p>
    </div>
  );
}

export default Login;
