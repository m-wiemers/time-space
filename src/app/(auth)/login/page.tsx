'use client';
import { Input } from '@/components/Input';
import { useState } from 'react';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Login</h1>
      <Input
        label="E-Mail-Adresse"
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        label="Passwort"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default LoginPage;
