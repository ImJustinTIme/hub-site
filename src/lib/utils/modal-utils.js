
import { modals } from 'Stores/index';
import { modalPages } from 'Utils/modal-values';

/**
 * 
 * @param {String} type 
 */
export const addModal = (type) => {
  const modalPage = modalPages[type];
  modals.update((prev) => {
    return [
      ...prev,
      modalPage
    ];
  });
};

export const removeModal = () => {
  modals.set([]);
};
