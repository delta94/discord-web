import React from 'react';
import ChatHeader from '../ChatHeader';

import styles from './Chat.module.css';

const Chat = () => (
  <div className={styles.chat}>
    <h2>Chat</h2>
    <ChatHeader />
  </div>
);

export default Chat;
