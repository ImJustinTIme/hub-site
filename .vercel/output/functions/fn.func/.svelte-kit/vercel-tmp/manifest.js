export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","AsteroidsJs.png","Crunchy (Small) 2.png","Crunchy (Small).png","Crunchy (Small).svg","close.svg","justink.jpg","styles/app.scss","styles/modal.scss"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.sipJSKUd.js","app":"_app/immutable/entry/app.oTwneseq.js","imports":["_app/immutable/entry/start.sipJSKUd.js","_app/immutable/chunks/entry.4W1zc0cL.js","_app/immutable/chunks/scheduler.iqJTFtyp.js","_app/immutable/chunks/index.Q7KZNAwp.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.oTwneseq.js","_app/immutable/chunks/scheduler.iqJTFtyp.js","_app/immutable/chunks/index.Z1hA7bBh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
