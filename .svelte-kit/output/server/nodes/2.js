

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.29d31e52.js","_app/immutable/chunks/scheduler.a06f3fd5.js","_app/immutable/chunks/index.11e024f1.js","_app/immutable/chunks/Header.f27fb338.js","_app/immutable/chunks/index.6ceaf6e2.js"];
export const stylesheets = [];
export const fonts = [];
