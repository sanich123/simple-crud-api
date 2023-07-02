import { ServerResponse } from "http";
import { validate } from "uuid";
import { MESSAGES, RESPONSE_CODES, RESPONSE_TYPE } from "../types/types.ts";
import { dataBase } from "../const/db.ts";
import { handleServerError } from "./utils.ts";

export function getUser(id: string, response: ServerResponse) {
  try {
    if (!validate(id)) {
      response.statusCode = RESPONSE_CODES.failure;
      response.end(MESSAGES.invalidUuid);
      return;
    }
    if (dataBase.checkIfUserExists(id)) {
      response.statusCode = RESPONSE_CODES.success;
      response.setHeader("Content-Type", RESPONSE_TYPE.appJson);
      response.end(JSON.stringify(dataBase.getUser(id)));
    } else {
      response.statusCode = RESPONSE_CODES.notFound;
      response.end(MESSAGES.notFoundId);
    }
  } catch (error) {
    handleServerError(error, response);
  }
}
