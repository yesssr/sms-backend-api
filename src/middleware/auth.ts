import { NextFunction, Request, Response } from "express";
import { SendError } from "./error";

export const paginationQueryValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let pagination: Record<string, string> = {
    start: req.query.start as string,
    end: req.query.end as string,
  };
  for (const key in pagination) {
    if (!pagination[key]) throw new SendError(`${key} is required`, 400);
    if (isNaN(parseInt(pagination[key])))
      throw new SendError(`${key} must be a number`, 400);
  }
  req.query.start = (Number(req.query.start) -1).toString();
  next();
};
