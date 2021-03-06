/**
 * Receber code(string)
 * recuperar o acess_token
 * verificar se o usuario existe
 * sim= gera
 * nao= cria
 * retornar token
 */
interface IAccessTokenResponse {
  access_token: String;
}
interface IUserResponce {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}
import axios from "axios";
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
    return response.data;
  }
}
export { AuthenticateUserService };
