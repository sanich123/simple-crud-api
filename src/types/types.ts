export type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export const enum PATHS {
  root = "/",
  users = "/api/users",
  usersWithId = '/api/users/',
}

export const enum METHODS {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE",
}

export const enum RESPONSE_CODES {
  success = 200,
  notFound = 404,
  failure = 400,
}

export const enum RESPONSE_TYPE {
  appJson = 'application/json',
}