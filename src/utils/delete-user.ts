import { ServerResponse } from "http";
import { validate } from "uuid";
import { MESSAGES, RESPONSE_CODES } from "../types/types.ts";
import { dataBase } from "../const/db.ts";
import { handleServerError } from "./utils.ts";

export async function deleteUserById(userId: string, response: ServerResponse) {
  try {
    if (!validate(userId)) {
      response.statusCode = RESPONSE_CODES.failure;
      response.end(MESSAGES.invalidUuid);
      return;
    }
    if (dataBase.checkIfUserExists(userId)) {
      dataBase.deleteUser(userId);
      response.statusCode = RESPONSE_CODES.successDelete;
      response.end();
    } else {
      response.statusCode = RESPONSE_CODES.notFound;
      response.end(MESSAGES.notFoundId);
    }
  } catch (error) {
    handleServerError(error, response);
  }
}
