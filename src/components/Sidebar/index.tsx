import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

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
          <h4>Text Channels</h4>
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
    </div>
  </div>
);

export default Sidebar;
