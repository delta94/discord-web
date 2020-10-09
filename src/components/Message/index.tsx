import { Avatar } from '@material-ui/core';
import React from 'react';

import styles from './Message.module.css';

const Message = () => (
  <div className={styles.message}>
    <Avatar />
    <div className={styles.message__info}>
      <h4>
        vBeloti
        <span className={styles.message__timestamp}>timestamp</span>
      </h4>

      <p>Mensagem</p>

    </div>
  </div>
);

export default Message;
