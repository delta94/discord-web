import { Button } from '@material-ui/core';
import React from 'react';

import styles from './Login.module.css';

const Login = () => {
  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Discord_logo_svg.svg/727px-Discord_logo_svg.svg.png" alt="Discord Logo" />
      </div>

      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Login;
