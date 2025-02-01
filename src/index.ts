import { Elysia } from "elysia";

const {PORT = 3000 } = process.env;
const app = new Elysia().get("/", ({ set }) => {
  set.headers = { 'Content-Type': 'text/html; charset=utf-8' }

  return "Hello from Elysia deploy with dPanel. Visit <a href='https://cloud.terpusat.com/'>dPanel</a> to deploy your Javascript application build and run with Bun.";
}).listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
