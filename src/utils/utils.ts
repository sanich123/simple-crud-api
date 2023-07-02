import { IncomingMessage, ServerResponse } from "http";
import { RESPONSE_CODES, User } from "../types/types.ts";

export async function getDataFromStream<T>(request: IncomingMessage): Promise<T> {
  return new Promise((resolve) => {
    const chunks: User[] = [];
    request.on("data", (data) => chunks.push(data));
    request.on("end", () => resolve(chunks.length ? JSON.parse(chunks.toString()) : ""));
  });
}

export function handleServerError(error: unknown, response: ServerResponse) {
  if (error instanceof Error) {
    response.statusCode = RESPONSE_CODES.serverError;
    response.end(`Some server error have occured. Check ${error.message}`);
  }
}
