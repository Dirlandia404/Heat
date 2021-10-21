import { Request, Response } from "express";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserController();
    const result = await service.execute(code);
  }
}

export { AuthenticateUserController };
