import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import * as firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import ChatHeader from '../ChatHeader';
import db from '../../config/firebase';

import styles from './Chat.module.css';
import Message from '../Message';
import { initialState } from '../../core/redux/store';

type State = typeof initialState;

const Chat = () => {
  const user = useSelector((state: typeof initialState) => state.user);
  const channelId = useSelector(
    (state: State) => state.channel.channelId,
  );
  const channelName = useSelector(
    (state: State) => state.channel.channelName,
  );
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }
  }, [channelId]);

  const handleSendMessage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user,
    });

    setInput('');
  };

  return (
    <div className={styles.chat}>
      <ChatHeader channelName={channelName} />

      <div className={styles.chat__messages}>
        {messages.map((message) => (
          <Message
            key={message.timestamp?.seconds}
            timestamp={message.timestamp?.seconds}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className={styles.chat__input}>
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Mensagem ${channelName || ''}`}
          />
          <button
            onClick={handleSendMessage}
            className={styles.chat__inputButton}
            type="submit"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className={styles.chat__inputIcons}>
          <CardGiftcardIcon
            className={styles.chat__inputIcon}
            fontSize="large"
          />
          <GifIcon className={styles.chat__inputIcon} fontSize="large" />
          <EmojiEmotionsIcon
            className={styles.chat__inputIcon}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
