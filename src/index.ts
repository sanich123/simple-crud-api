import "dotenv/config";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { router } from "./router/router.ts";

const server = createServer((req: IncomingMessage, res: ServerResponse) => router(req, res));
server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
