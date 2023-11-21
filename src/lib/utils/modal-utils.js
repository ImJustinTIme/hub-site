
import { modals } from 'Stores/index';
import { modalPages } from 'Utils/modal-values';

/**
 * 
 * @param {String} type 
 */
export const addModal = (type) => {
  console.log('was run');
  const modalPage = modalPages[type];
  modals.update((prev) => {
    console.log(prev);
    return [
      ...prev,
      modalPage
    ];
  });
};

export const removeModal = () => {
  modals.set([]);
};
