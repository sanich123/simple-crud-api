import { ServerResponse } from "http";
import * as uuid from "uuid";
import { DATA_BASE } from "../const/db.ts";
import { METHODS, RESPONSE_CODES, RESPONSE_TYPE } from "../types/types.ts";

export function getUser(method: string, id: string, response: ServerResponse) {
  if (method === METHODS.get) {
    if (!uuid.validate(id)) {
      response.statusCode = RESPONSE_CODES.failure;
      response.end("Request id is not a valid uuid id. ");
      return;
    }

    const user = DATA_BASE.find(({ id: userId }) => id === userId);

    if (user) {
      response.statusCode = RESPONSE_CODES.success;
      response.setHeader("Content-Type", RESPONSE_TYPE.appJson);
      response.end(JSON.stringify(user));
    } else {
      response.statusCode = RESPONSE_CODES.notFound;
      response.end(`Could not find user with this id ${id}`);
    }
  }
}
