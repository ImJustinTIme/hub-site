import { redirect } from "@sveltejs/kit";

export function load() {
	throw redirect(305, '/home');
}