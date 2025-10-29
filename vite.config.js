import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calculator: resolve(
          __dirname,
          "src/projects/calculator/calculator.html"
        ),
        todoList: resolve(__dirname, "src/projects/todo-list/todo-list.html"),
        weatherApp: resolve(
          __dirname,
          "src/projects/weather-app/weather-app.html"
        ),
        blackjack: resolve(__dirname, "src/projects/blackjack/blackjack.html"),
      },
      output: {
        assetFileNames: "assets/cards/[name]-[hash][extname]",
      },
    },
  },
});
