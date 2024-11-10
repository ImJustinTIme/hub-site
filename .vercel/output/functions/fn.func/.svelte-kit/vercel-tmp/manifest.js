export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AsteroidsJs.png","Crunchy (Small) 2.png","Crunchy (Small).png","Crunchy (Small).svg","DriStack.png","KitchenKorner.png","Onlink.png","close.svg","justink.jpg","tetris clock.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.B8SmBihD.js","app":"_app/immutable/entry/app.cS6morUj.js","imports":["_app/immutable/entry/start.B8SmBihD.js","_app/immutable/chunks/entry.BXFdzdrT.js","_app/immutable/chunks/runtime.kuqE-DHB.js","_app/immutable/chunks/index.DJ98Je_4.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.cS6morUj.js","_app/immutable/chunks/legacy-client.DNK4qyXc.js","_app/immutable/chunks/runtime.kuqE-DHB.js","_app/immutable/chunks/svelte-component.CR1A1ac-.js","_app/immutable/chunks/store.vDl6F9IY.js","_app/immutable/chunks/disclose-version.CFatPvtM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
