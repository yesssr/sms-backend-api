import { genSaltSync, hashSync, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { SendError } from "../middleware/error";
dotenv.config();

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  const filetypes = /jpeg|jpg|png|gif|jfif/;
  const extname = filetypes.test(file.originalname);

  if (extname) {
    cb(null, true);
  } else {
    cb(
      new SendError("Image uploaded is not of type jpg/jpeg or png", 400),
      false
    );
  }
};

export const uploadImage = () => {
  const upload = multer({
    fileFilter: fileFilter,
    limits: { fileSize: 5000000 },
    storage: multer.memoryStorage(),
  });
  return upload;
};

export function hashPass(password: string) {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

export async function comparePass(password: string, hashPass: string) {
  const isMatch = await compare(password, hashPass);
  return isMatch;
}

export function createToken(payload: object) {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables");
  }

  const token = sign(payload, secretKey, {
    expiresIn: "168h",
  });
  return token;
}

export function verifyToken(token: string) {
  const isMatch = verify(token, process.env.JWT_SECRET_KEY!);
  return isMatch;
}

export function success(
  res: Response,
  msg: string,
  statusCode: number,
  data: any,
  pagination?: object,
  token?: string
) {
  return res.status(statusCode).json({
    success: true,
    message: msg,
    statusCode: statusCode,
    data: data,
    pagination,
    credentials: token,
  });
}

export function pagination(total: number, page: number, length: number) {
  const totalPage = Math.ceil(total / length);
  return {
    current_page: page,
    next_page: page < totalPage ? page + 1 : page,
    previous_page: page - 1,
    total_pages: totalPage,
    per_page: length,
    total_entries: total,
  };
}