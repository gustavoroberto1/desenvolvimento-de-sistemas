import { compare, hash } from 'bcryptjs';
import { FastifyInstance } from "fastify";
import { prisma } from "../prisma/client";
import { CreateUserType, LoginType } from "../types/login";

class AuthService {
  constructor() {}

  public async login({ email, password }: LoginType, app: FastifyInstance): Promise<string | null> {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if(!user){
      throw new Error("Credenciais inválidas");
    }

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new Error("Credenciais inválidas");
    };

    return app.jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate
    });
  }

  public async register(data: CreateUserType) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        password: hashedPassword,
        birthDate: new Date(data.birthDate),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
    };
  }
}

export const authService = new AuthService();