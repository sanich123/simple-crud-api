import "dotenv/config";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { router } from "./router/router.ts";
import { User } from "./types/types.ts";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  //   id: "3c0d1e4c-ac0a-4560-b28f-705cb1af693f",
  //   username: "Sanich123",
  //   age: 33,
  //   hobbies: ["type words into command line", "running", "masturbating"],
  // },
  // { username: "Fucking noob", age: 57, hobbies: ["read books", "swimming in the pool"], id: "6e953c9b-809f-4f6a-a4f1-0fea0e1cee71" },

  router(req, res);
});
server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
