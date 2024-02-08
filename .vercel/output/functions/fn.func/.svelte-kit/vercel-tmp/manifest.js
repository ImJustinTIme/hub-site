export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","AsteroidsJs.png","Crunchy (Small) 2.png","Crunchy (Small).png","Crunchy (Small).svg","close.svg","justink.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.v-gPbn2e.js","app":"_app/immutable/entry/app.qN11YiOl.js","imports":["_app/immutable/entry/start.v-gPbn2e.js","_app/immutable/chunks/entry.2ypGetwx.js","_app/immutable/chunks/scheduler.H_AjIzbe.js","_app/immutable/chunks/index.969uwfpS.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.qN11YiOl.js","_app/immutable/chunks/scheduler.H_AjIzbe.js","_app/immutable/chunks/index.Ngrm9XW4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
