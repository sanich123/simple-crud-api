import { ServerResponse, IncomingMessage } from "http";
import { validate } from "uuid";
import { MESSAGES, RESPONSE_CODES, User } from "../types/types.ts";
import { getDataFromStream, handleServerError } from "./utils.ts";
import { dataBase } from "../const/db.ts";

export async function putUserById(userId: string, request: IncomingMessage, response: ServerResponse) {
  try {
    if (!validate(userId)) {
      response.statusCode = RESPONSE_CODES.failure;
      response.end(MESSAGES.invalidUuid);
      return;
    }

    const fieldsToEdit: User = await getDataFromStream(request);
    if (dataBase.checkIfUserExists(userId) && fieldsToEdit) {
      dataBase.updateUser(userId, fieldsToEdit);
      response.statusCode = RESPONSE_CODES.success;
      response.end(JSON.stringify(dataBase.getUser(userId)));
    } else {
      response.statusCode = RESPONSE_CODES.notFound;
      response.end(MESSAGES.emptyRequestOrInvalidUser);
    }
  } catch (error) {
    handleServerError(error, response);
  }
}
