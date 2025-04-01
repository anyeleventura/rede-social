import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuario/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h2>-<br /> FriendsGUI <br />-</h2>
          <p>
            Uma plataforma de mídia social que conecta você com seus amigos e familiares.<br />
            Compartilhe seus pensamentos, fotos e experiências com as pessoas que mais importam para você.
          </p>

          <span>Você não tem uma conta?</span>
          <Link to='/signup'>
            <button className='btn btn-primary'>Criar Conta</button>
          </Link>
        </div>

        <form className='right' onSubmit={handleLogin}>
          <input
            type="email"
            required
            placeholder='Seu Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder='Sua Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type='submit' className='btn'>Entrar</button>
        </form>
      </div>
    </div>
  );
}
