import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

import styles from './ChatHeader.module.css';

type ChatHeaderProps = {
    channelName: string;
}

const ChatHeader = ({ channelName }: ChatHeaderProps) => (
  <div className={styles.chatHeader}>
    <div className={styles.chatHeader__left}>
      <h3>
        <span className={styles.chatHeader__hash}>#</span>
        {channelName}
      </h3>
    </div>

    <div className={styles.chatHeader__right}>
      <NotificationsIcon className={styles.ChatHeader__icon} />
      <EditLocationRoundedIcon className={styles.ChatHeader__icon} />
      <PeopleAltRoundedIcon className={styles.ChatHeader__icon} />

      <div className={styles.chatHeader__search}>
        <input placeholder="Buscar" />
        <SearchRoundedIcon />
      </div>

      <SendRoundedIcon className={styles.ChatHeader__iconMargin} />
      <HelpRoundedIcon className={styles.ChatHeader__iconMargin} />
    </div>
  </div>
);

export default ChatHeader;
