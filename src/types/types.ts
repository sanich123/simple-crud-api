export type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export const enum PATHS {
  root = "/",
  users = "/api/users",
}

export const enum RESPONSE_CODES {
  success = 200,
  successCreate = 201,
  successDelete = 204,
  notFound = 404,
  failure = 400,
  serverError = 500,
}

export const enum RESPONSE_TYPE {
  appJson = "application/json",
}

export const enum MESSAGES {
  requiredFields = "Your request did not match the requirements. Sended field username should not be empty string, field age should not be zero number, field hobby should be array with strings or empty array",
  emptyRequest = "You sent us nothing, what did you expect? That we fucking add your nothing to the database? Fuck you.",
  invalidUuid = "Request id is not a valid uuid id. ",
  notFoundId = "User with that id have not been found in our database.",
  notFoundAddress = "There is something wrong with this endpoint. Check if address is correct. ",
  emptyRequestOrInvalidUser = "There was some error. Possible issues: you have not send us data to update or id of the user did not exist on the server",
}
