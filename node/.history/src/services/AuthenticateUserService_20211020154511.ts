/**
 * Receber code(string)
 * recuperar o acess_token
 * verificar se o usuario existe
 * sim= gera
 * nao= cria
 * retornar token
 */
import axios from "axios";
import prismaCliente from "../prisma";
import { sign } from "jsonwebtoken";

interface IAccessTokenResponse {
  access_token: String;
}
interface IUserResponce {
  avatar_url: string;
  login: string;
  id: String;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      });

    const response = await axios.get<IUserResponce>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { login, id, avatar_url, name } = response.data;
    let user = await prismaCliente.user.findFirst({
      where: {
        github_id: id,
      },
    });
    if (!user) {
      user = await prismaCliente.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name,
        },
      });
    }
    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JMT_SECRET,
      {
        subject: user.id,
        expiresIn: "id",
      }
    );

    return { token, user };
  }
}
export { AuthenticateUserService };
