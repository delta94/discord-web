import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../config/firebase';
import { initialState, initializeStore, useStore } from '../../core/redux/store';

const Login = (props) => {
  console.log(props);
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
        throw new Error('Error ao buscar');
      }
    });
  }, []);

  return (
    <div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Discord_logo_svg.svg/727px-Discord_logo_svg.svg.png"
          alt="Discord Logo"
        />
      </div>

      {/* <Button onClick={handleSignIn}>Sign In</Button> */}
    </div>
  );
};

export default Login;

export async function getStaticProps() {
  const user = useStore('user');

  // const user = useSelector((state: typeof initialState) => state.user);

  // Pass data to the page via props
  return { props: { user } };
}
