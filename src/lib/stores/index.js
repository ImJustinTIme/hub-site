// Core
import { writable} from "svelte/store";
import params from "./params";

// Modal Default Config
export const modalState = writable(params.modalInitalState);
export const closeModal = writable(() => {
  modalState.update(() => params.modalInitalState);
});
export const processModal = writable(() => {
  modalState.update(() => params.modalInitalState);
});