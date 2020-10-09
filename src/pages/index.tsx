import Head from 'next/head';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />

      <Chat />
    </div>
  );
}
