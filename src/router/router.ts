import { IncomingMessage, ServerResponse } from "http";
import { PATHS } from "../types/types.ts";
import { handleBadAddress } from "../utils/handle-bad-address.ts";
import { getUsers } from "../utils/get-users.ts";
import { postUser } from "../utils/post-user.ts";
import { getUser } from "../utils/get-user.ts";
import { putUserById } from "../utils/put-user.ts";
import { deleteUserById } from "../utils/delete-user.ts";
import { handleServerError } from "../utils/utils.ts";
import { METHODS } from "../types/const.ts";

export function router(request: IncomingMessage, response: ServerResponse) {
  const { get, post, put, del } = METHODS;
  try {
    const { url, method } = request;
    if (url && method) {
      if (url === PATHS.users) {
        if (method === get) getUsers(response);
        else if (method === post) postUser(request, response);
        else handleBadAddress(response);
      } else if (url.includes(`${PATHS.users}/`)) {
        const id = url.split(`${PATHS.users}/`)[1];
        if (method === get) getUser(id, response);
        else if (method === put) putUserById(id, request, response);
        else if (method === del) deleteUserById(id, response);
      } else handleBadAddress(response);
    }
  } catch (error) {
    handleServerError(error, response);
  }
}
