import prismaCliente from "../prisma";

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
  }
}
export { CreateMessageService };
