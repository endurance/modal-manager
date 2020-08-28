import { EventEmitter } from "events";

class ModalEmitter extends EventEmitter {}

export const modalEmitter = new ModalEmitter();

export const MODAL_TO_RENDER = 'MODAL_TO_RENDER';

export const renderModal = (Component: Function) => {
  modalEmitter.emit(MODAL_TO_RENDER, () => Component);
};

export const closeModal = () => {
  modalEmitter.emit(MODAL_TO_RENDER, null);
};
