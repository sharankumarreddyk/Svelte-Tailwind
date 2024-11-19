

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.df176201.js","_app/immutable/chunks/scheduler.a06f3fd5.js","_app/immutable/chunks/index.11e024f1.js","_app/immutable/chunks/singletons.0933325e.js","_app/immutable/chunks/index.6ceaf6e2.js"];
export const stylesheets = [];
export const fonts = [];
