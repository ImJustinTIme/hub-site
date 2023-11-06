// Core
import { writable} from "svelte/store";

/**
 * @type {import("svelte/store").Writable<Array<import("svelte").ComponentType>>}
 */
export const modals = writable([]);
