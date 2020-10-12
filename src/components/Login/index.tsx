import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../config/firebase';
import { initialState } from '../../core/redux/store';

import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSignIn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'LOGIN',
          payload: {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          },
        });
      } else {
        dispatch({
          type: 'LOGOUT',
        });
      }
    });
  }, [dispatch]);

  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Discord_logo_svg.svg/727px-Discord_logo_svg.svg.png"
          alt="Discord Logo"
        />
      </div>

      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Login;
