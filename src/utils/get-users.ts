import { ServerResponse } from "http";
import { RESPONSE_CODES, RESPONSE_TYPE, User } from "../types/types.ts";
import { dataBase } from "../const/db.ts";
import { handleServerError } from "./utils.ts";

export function getUsers(response: ServerResponse) {
  try {
    response.statusCode = RESPONSE_CODES.success;
    response.setHeader("Content-Type", RESPONSE_TYPE.appJson);
    response.end(JSON.stringify(dataBase.getUsers()));
  } catch (error) {
    handleServerError(error, response);
  }
}
