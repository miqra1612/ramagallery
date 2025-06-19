import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or your framework's plugin (e.g., vue(), svelte())
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS Vite plugin
	
export default defineConfig({
	  plugins: [
	    react(), // Your framework's plugin
	    tailwindcss(), // Add the Tailwind CSS plugin here
	  ],
	  base:'/ramagallery/'	
  });
