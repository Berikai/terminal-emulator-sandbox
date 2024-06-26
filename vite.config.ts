import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
			},
		}),
	],
	define: {
		BUILD_TIMESTAMP: (new Date().getFullYear().toString()) + ('0' + (new Date().getMonth() + 1).toString()).slice(-2) + ('0' + new Date().getDate().toString()).slice(-2),
	 },
})
