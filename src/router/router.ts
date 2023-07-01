import { IncomingMessage, ServerResponse } from "http";
import { PATHS, RESPONSE_CODES } from "../types/types.ts";
import { getUser } from "../utils/get-user.ts";
import { getUsers } from "../utils/get-users.ts";

export function router(request: IncomingMessage, response: ServerResponse) {
  const { url, method } = request;
  if (url && method) {
    if (url === PATHS.users) {
      getUsers(method, response);
    } else if (url.includes(PATHS.usersWithId)) {
      const id = url.split(PATHS.usersWithId)[1];
      getUser(method, id, response);
    }
  } else {
    response.statusCode = RESPONSE_CODES.notFound;
    response.end("There is no endpoint on this address, sorry.");
  }
}
