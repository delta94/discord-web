import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ChatHeader from '../ChatHeader';

import styles from './Chat.module.css';
import Message from '../Message';

const Chat = () => (
  <div className={styles.chat}>
    <ChatHeader />

    <div className={styles.chat__messages}>
      <Message />
      <Message />
      <Message />
    </div>

    <div className={styles.chat__input}>
      <AddCircleIcon fontSize="large" />
      <form>
        <input placeholder="Mensagem #CanalTeste" />
        <button className={styles.chat__inputButton} type="submit">Enviar Mensagem</button>
      </form>

      <div className={styles.chat__inputIcons}>
        <CardGiftcardIcon className={styles.chat__inputIcon} fontSize="large" />
        <GifIcon className={styles.chat__inputIcon} fontSize="large" />
        <EmojiEmotionsIcon className={styles.chat__inputIcon} fontSize="large" />
      </div>
    </div>
  </div>
);

export default Chat;
