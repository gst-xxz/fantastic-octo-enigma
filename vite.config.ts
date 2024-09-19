import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveExtensions = () => {
  const extensions = [".tsx", ".ts", ".jsx", ".js"];
  const feature = JSON.stringify(process.env.FEATURE);

  return extensions.reduce((arr, ext) => {
    if (feature === '"community"') {
      arr.push(`.community${ext}`);
    }
    if (feature === '"premium"') {
      arr.push(`.premium${ext}`);
    }

    arr.push(ext);

    return arr;
  }, [] as string[]);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.FEATURE": JSON.stringify(process.env.FEATURE),
  },
  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: resolveExtensions(),
  },
});
