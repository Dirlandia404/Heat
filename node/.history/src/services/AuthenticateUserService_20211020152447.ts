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

interface IAccessTokenResponse {
  access_token: String;
}
interface IUserResponce {
  avatar_url: string;
  login: string;
  id: number;
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
    const user = await prismaCliente.user.findFirst({
      where: {
        github_id: id,
      },
    });

    return response.data;
  }
}
export { AuthenticateUserService };
