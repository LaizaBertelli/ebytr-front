import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';

function Login() {
  return (
    <div>
      <Input id="email" type="email" name="email" value="" label="Email" />
      <Input id="password" type="password" name="password" value="" label="password" />
      <Button text="Entrar" />
    </div>
  );
}

export default Login;
