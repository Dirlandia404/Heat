import prismaClient from "../prisma";

class ProfileUserService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });
    return messages;
  }
}
export { ProfileUserService };
