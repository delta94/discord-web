import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './SidebarChannel.module.css';

type SidebarChannelProps = {
    id: string;
    channelName: string;
};

const SidebarChannel = ({ id, channelName }: SidebarChannelProps) => {
  const dispatch = useDispatch();

  const handleChannelInfo = () => {
    dispatch({
      type: 'SET_CHANNEL_ID',
      payload: {
        channelId: id,
        channelName,
      },
    });
  };

  return (
    <div className={styles.sidebarChannel} onClick={handleChannelInfo}>
      <h4>
        <span className={styles.sidebarChannel__hash}>#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
