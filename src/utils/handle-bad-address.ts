import { ServerResponse } from "http";
import { MESSAGES, RESPONSE_CODES } from "../types/types.ts";

export function handleBadAddress(response: ServerResponse) {
  response.statusCode = RESPONSE_CODES.notFound;
  response.end(MESSAGES.notFoundAddress);
}
