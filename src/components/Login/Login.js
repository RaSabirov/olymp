import React from 'react';
import './Login.css';
import loginBtn from '../../assets/img/login.svg';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <Link className='login__link' to='/login'>
      <div className='login'>
        <img className='login__btn' src={loginBtn} alt='login button' />
        <p className='login__title'>Вход в админку</p>
      </div>
    </Link>
  );
};
