import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: process.env.VERCEL ? "/" : "/Gexpert_v1.2/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['lucide-react'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
    minify: true,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        pure_funcs: ["console.log", "console.warn", "console.info"],
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React ecosystem
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor';
            }
            // UI libraries
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('lucide-react') || id.includes('@radix-ui') || id.includes('class-variance-authority')) {
              return 'ui';
            }
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts';
            }
            // Other node_modules
            return 'vendor-other';
          }
          // Application chunks
          if (id.includes('/src/pages/')) {
            return 'pages';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
        },
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          parser: "postcss",
        },
      },
      minify: true,
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    target: "ES2020",
    sourcemap: false,
  },
});
