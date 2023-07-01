import { ServerResponse } from "http";
import { DATA_BASE } from "../const/db.ts";
import { METHODS, RESPONSE_CODES, RESPONSE_TYPE } from "../types/types.ts";

export function getUsers(method: string, response: ServerResponse) {
  if (method === METHODS.get) {
    response.statusCode = RESPONSE_CODES.success;
    response.setHeader("Content-Type", RESPONSE_TYPE.appJson);
    response.end(JSON.stringify(DATA_BASE));
  } else {
    response.statusCode = RESPONSE_CODES.notFound;
    response.end("Sorry, you only can GET something from this endpoint, check your method");
  }
}
