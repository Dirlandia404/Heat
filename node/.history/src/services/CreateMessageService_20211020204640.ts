import prismaCliente from "../prisma";
import { io } from "../app";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaCliente.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
    };
    io.emit("new message");
    return message;
  }
}
export { CreateMessageService };
