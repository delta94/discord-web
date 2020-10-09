import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import { Avatar } from '@material-ui/core';
import styles from './Sidebar.module.css';
import SidebarChannel from '../SidebarChannel';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.sidebar__top}>
      <h3>Vinicius Beloti</h3>
      <ExpandMoreIcon />
    </div>

    <div className={styles.sidebar__channels}>
      <div className={styles.sidebar__channelsHeader}>
        <div className={styles.sidebar__header}>
          <ExpandMoreIcon />
          <h4>Canais</h4>
        </div>

        <AddIcon className={styles.sidebar__addChannel} />
      </div>
      <div className={styles.sidebar__channelsList}>
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
      </div>
    </div>

    <div className={styles.sidebar__voice}>
      <SignalCellularAltIcon
        className={styles.sidebar__voiceIcon}
        fontSize="large"
      />

      <div className={styles.sidebar__voiceInfo}>
        <h3>Voz conectada</h3>
        <p>Stream</p>
      </div>

      <div className={styles.sidebar__voiceIcons}>
        <InfoOutlinedIcon />
        <CallIcon />
      </div>
    </div>

    <div className={styles.sidebar__profile}>
      <Avatar src="https://i.imgur.com/I80W1Q0.png" />
      <div className={styles.sidebar__profileInfo}>
        <h3>@vbeloti</h3>
        <p>#vBeloti</p>
      </div>

      <div className={styles.sidebar__profileIcons}>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </div>
    </div>
  </div>
);

export default Sidebar;
