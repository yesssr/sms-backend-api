import { NextFunction, Request, Response } from "express";
import { SendError } from "./error";
import { comparePass, createToken, success, verifyToken } from "../utils/utils";
import { usersQuery } from "../helpers/users";

export const paginationQueryValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let pagination: Record<string, string> = {
      page: req.query.page as string,
      length: req.query.length as string,
    };
    for (const key in pagination) {
      if (!pagination[key]) throw new SendError(`${key} is required`, 400);
      if (isNaN(parseInt(pagination[key])))
        throw new SendError(`${key} must be a number`, 400);
    }
    const limit = parseInt(pagination.page) * parseInt(pagination.length);
    const offset =
      (parseInt(pagination.page) - 1) * parseInt(pagination.length);
    req.query.limit = limit.toString();
    req.query.offset = offset.toString();
    next();
  } catch (error) {
    next(error);
  }
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization?.split(" ")[1];
    if (!authorization) throw new SendError("invalid credentials!", 401);

    const decoded = verifyToken(authorization);
    if (!decoded) throw new SendError("invalid credentials!", 401);
    req.app.locals.credentials = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    if (!username) throw new SendError("username is required!", 400);
    if (!password) throw new SendError("password is required!", 400);

    const user = await usersQuery.getByCredentials(username);
    if (!user) throw new SendError("username or email not registered!", 401);
    const isMatch = await comparePass(password, user.password!);
    if (!isMatch) throw new SendError("password is incorrect!", 401);

    const payload = {
      id: user.id,
      sekolah_id: user.sekolah_id,
      role: user.roles,
    };
    const token = createToken(payload);
    delete user.password;
    success(res, "login successfully", 200, user, ...[,], token);
  } catch (error) {
    next(error);
  }
};
