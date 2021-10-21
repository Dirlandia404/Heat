import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authtoken = request.headers.authorization;

  if (!authtoken) {
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }
}
