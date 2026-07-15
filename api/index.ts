import type { Request, Response } from "express";
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

let databaseConnection: Promise<void> | null = null;

export default async function handler(req: Request, res: Response) {
  databaseConnection ??= connectDB();
  await databaseConnection;
  return app(req, res);
}
