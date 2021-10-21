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
    const url = "https://github.com/login/oauth/acess_token"
    
    const response = await
  }
}
export { AuthenticateUserService };
