import Head from 'next/head';
import { useSelector } from 'react-redux';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';
import { initialState } from '../core/redux/store';
import { selectUser } from '../core/redux/store/user';

export default function Home() {
  const user = useSelector((state: typeof initialState) => state.user);

  return (
    <div className="home">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <h2>You need to login</h2>
      )}

    </div>
  );
}
