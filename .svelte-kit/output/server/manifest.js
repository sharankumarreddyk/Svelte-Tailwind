export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/goal.png","assets/selection.png","assets/training.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8cd45962.js","app":"_app/immutable/entry/app.91a5dad1.js","imports":["_app/immutable/entry/start.8cd45962.js","_app/immutable/chunks/scheduler.a06f3fd5.js","_app/immutable/chunks/singletons.0933325e.js","_app/immutable/chunks/index.6ceaf6e2.js","_app/immutable/entry/app.91a5dad1.js","_app/immutable/chunks/scheduler.a06f3fd5.js","_app/immutable/chunks/index.11e024f1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
