import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    exclude: [
      "@webstudio-is/sdk-components-react-router",
      "@webstudio-is/sdk-components-react",
      "@webstudio-is/sdk-components-react-radix"
    ],
  },
});
