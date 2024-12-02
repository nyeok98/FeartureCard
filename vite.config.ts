import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // 프로젝트 루트 디렉토리
  build: {
    outDir: "dist", // 빌드 결과물 디렉토리
  },
  resolve: {
    alias: {
      // @/ 로 시작하는 경로를 src/ 로 매핑
      "@": path.resolve(__dirname, "./src"),
      "~images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
});
