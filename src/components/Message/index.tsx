import { Avatar } from '@material-ui/core';
import React from 'react';

import styles from './Message.module.css';

type MessageProps = {
    timestamp: number;
    message: string;
    user: User;
}

type User = {
    displayName: string;
    photo: string;
}

const Message = ({
  timestamp,
  message,
  user,
}: MessageProps) => (
  <div className={styles.message}>
    <Avatar src={user.photo} />
    <div className={styles.message__info}>
      <h4>
        {user.displayName}
        <span className={styles.message__timestamp}>{new Date(timestamp * 1000).toLocaleDateString('pt-BR')}</span>
      </h4>

      <p>{message}</p>

    </div>
  </div>
);

export default Message;
