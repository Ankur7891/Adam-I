import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';

function Register() {
  const Navigate = useNavigate();
  const handlesubmit = e => {
    e.preventDefault();
    Navigate('/login');
  };
  return (
    <div>
      <div className={styles['register-container']}>
        <NavBar />
        <div className={styles.register}>
          <form action="" className={styles.register_form} onSubmit={handlesubmit}>
            <h1>Register</h1>
            <div className={styles['register-input']}>
              <label htmlFor="username">
                {' '}
                <input
                  type="text"
                  id="username"
                  className={styles['register-username']}
                  placeholder="Name"
                  autoComplete="current-password"
                />
              </label>
              <label htmlFor="email">
                {' '}
                <input
                  type="email"
                  id="email"
                  className={styles['register-email']}
                  placeholder="Email"
                  autoComplete="username"
                />
              </label>
              <label htmlFor="password">
                {' '}
                <input
                  type="password"
                  id="password"
                  className={styles['register-password']}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </label>
            </div>

            <div className={styles['login-link']}>
              have an account? <a href="/login">Login</a>
            </div>
            <Button Name="Register" type="submit" />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <div className={styles.Invest}>
          Shaping tomorrow together, Invest in Africa&apos;s potential.
        </div>
      </div>
    </div>
  );
}

export default Register;
