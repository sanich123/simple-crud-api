import { IncomingMessage, ServerResponse } from "http";
import { MESSAGES, RESPONSE_CODES, User } from "../types/types.ts";
import { v4 } from "uuid";
import { getDataFromStream, handleServerError } from "./utils.ts";
import { dataBase } from "../const/db.ts";

export async function postUser(request: IncomingMessage, response: ServerResponse) {
  try {
    const newUser: User = await getDataFromStream<User>(request);
    if (newUser) {
      const { username, age, hobbies } = newUser;
      if (username && age && hobbies.length >= 0) {
        newUser.id = v4();
        dataBase.createUser(newUser);
        response.statusCode = RESPONSE_CODES.successCreate;
        response.end(JSON.stringify(newUser));
      } else {
        response.statusCode = RESPONSE_CODES.failure;
        response.end(MESSAGES.requiredFields);
      }
    } else {
      response.statusCode = 400;
      response.end(MESSAGES.emptyRequest);
    }
  } catch (error) {
    handleServerError(error, response);
  }
}
