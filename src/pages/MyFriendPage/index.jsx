/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatBubble from '../../components/ChatBubble';

import Information from './Information';

export default function MyFriendPage({ t }) {
  return (
    <>
      <Header fill />
      <Information t={t} />
      <Footer t={t} />
      <ChatBubble type="myfriend-chat" />
    </>
  );
}
