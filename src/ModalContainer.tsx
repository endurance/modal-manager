import React, { useEffect, useState } from 'react';
import { MODAL_TO_RENDER, modalEmitter } from './renderModal';

export const ModalContainer = () => {
  const [CurrentModal, setModal] = useState(null);
  useEffect(() => {
    modalEmitter.on(MODAL_TO_RENDER, (modal) => setModal(modal));
  }, []);
  if (!CurrentModal) {
    return null;
  }
  return <CurrentModal open onClose={() => setModal(null)} />;
};
