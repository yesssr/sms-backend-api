import {
  ValidationError,
  UniqueViolationError,
  ForeignKeyViolationError,
} from "objection";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export class SendError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (err) {
    if (err instanceof ValidationError) {
      const errors: Record<string, string> = {};
      for (const key in err.data) {
        errors[key] = err.data[key][0].message;
      }
      return res.status(400).json({
        success: false,
        statusCode: 400,
        errors,
      });
    }

    if (err instanceof UniqueViolationError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: err,
      });
    }

    if (err instanceof ForeignKeyViolationError) {
      const msg = err.constraint.split("_");
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: err,
      });
    }

    if (err instanceof JsonWebTokenError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: err,
      });
    }

    if (err instanceof TokenExpiredError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: err,
      });
    }

    if (err instanceof SendError) {
      return res.status(err.statusCode).json({
        success: false,
        statusCode: err.statusCode,
        message: err.message,
      });
    }

    console.error(err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      errors: "Internal server error",
    });
  }
};
