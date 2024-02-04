import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Tpfp8iDx.js","_app/immutable/chunks/scheduler.H_AjIzbe.js","_app/immutable/chunks/index.Ngrm9XW4.js"];
export const stylesheets = ["_app/immutable/assets/0.VysmCM-m.css"];
export const fonts = [];
