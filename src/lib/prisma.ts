// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "info"] : ["error"],
  })

if (process.env.NODE_ENV === "development") global.prisma = prisma
