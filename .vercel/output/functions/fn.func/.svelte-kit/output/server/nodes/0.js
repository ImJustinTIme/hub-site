import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Tdpqklzq.js","_app/immutable/chunks/disclose-version.CFatPvtM.js","_app/immutable/chunks/runtime.kuqE-DHB.js","_app/immutable/chunks/snippet.D1UKoWDs.js"];
export const stylesheets = ["_app/immutable/assets/0._ErxfNFc.css"];
export const fonts = [];
