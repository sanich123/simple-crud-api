import 'dotenv/config';
import { createServer, IncomingMessage, ServerResponse } from "http";

const port = 3000;
console.log(process.env.PORT)
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
