import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import styles from './ChatHeader.module.css';

const ChatHeader = () => (
  <div className={styles.chatHeader}>
    <h2>ChatHeader</h2>

    <div className={styles.chatHeader__left}>
      <h3>
        <span className={styles.chatHeader__hash}>#</span>
        Nome do Canal
      </h3>
    </div>

    <div className={styles.chatHeader__right}>
      <NotificationsIcon />
      <EditLocationRoundedIcon />
      <PeopleAltRoundedIcon />
    </div>
  </div>
);

export default ChatHeader;
