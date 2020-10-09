import React from 'react';

import styles from './SidebarChannel.module.css';

type SidebarChannelProps = {
    id: string;
    channel: string;
};

const SidebarChannel = ({ id, channel }) => (
  <div className={styles.sidebarChannel}>
    <h4>
      <span className={styles.sidebarChannel__hash}>#</span>
      Youtube
    </h4>
  </div>
);

export default SidebarChannel;
