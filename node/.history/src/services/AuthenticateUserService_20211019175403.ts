/**
 * Receber code(string)
 * recuperar o acess_token
 * verificar se o usuario existe
 * sim= gera
 * nao= cria
 * retornar token
 */
import axios from "axios";
class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/acess_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });
  }
}
export { AuthenticateUserService };
