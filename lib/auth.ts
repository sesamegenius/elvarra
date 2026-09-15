import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface AdminUser {
  id: string;
  username: string;
  email: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: AdminUser): string {
  return jwt.sign(
    { 
      id: user.id, 
      username: user.username, 
      email: user.email 
    },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
}

export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    return {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
    };
  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    return null;
  }
}

export async function authenticateAdmin(username: string, password: string): Promise<AdminUser | null> {
  try {
    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return null;
    }

    const isValidPassword = await verifyPassword(password, admin.password);
    if (!isValidPassword) {
      return null;
    }

    return {
      id: admin.id,
      username: admin.username,
      email: admin.email,
    };
  } catch (error) {
    console.error("Erreur lors de l'authentification:", error);
    return null;
  }
}

export async function createAdmin(username: string, email: string, password: string): Promise<AdminUser | null> {
  try {
    const hashedPassword = await hashPassword(password);
    
    const admin = await prisma.admin.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return {
      id: admin.id,
      username: admin.username,
      email: admin.email,
    };
  } catch (error) {
    console.error("Erreur lors de la création de l'admin:", error);
    return null;
  }
}
