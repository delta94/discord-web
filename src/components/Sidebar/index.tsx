import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.css';
import SidebarChannel from '../SidebarChannel';
import { initialState } from '../../core/redux/store';
import db, { auth } from '../../config/firebase';

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      })),
    ));
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Digite o nome do canal');
    if (channelName) {
      db.collection('channels').add({
        channelName,
      });
    }
  };

  const user = useSelector((state: typeof initialState) => state.user);

  return (
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

          <AddIcon onClick={handleAddChannel} className={styles.sidebar__addChannel} />
        </div>
        <div className={styles.sidebar__channelsList}>
          {channels.map(({ id, channel }) => (
            <SidebarChannel id={id} key={id} channelName={channel.channelName} />
          ))}
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
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className={styles.sidebar__profileInfo}>
          <h3>{user.displayName}</h3>
          <p>
            #
            {user.uid.substring(0, 5)}
          </p>
        </div>

        <div className={styles.sidebar__profileIcons}>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
