import { ValidationError, UniqueViolationError, ForeignKeyViolationError } from 'objection';
import { TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

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
  next: NextFunction,
): Response | void => {
  if (err) {
    if (err instanceof ValidationError) {
      // Handle ValidationError from Objection
      const msg = err.message.split(',')[0];
      return res.status(err.statusCode).json({
        success: false,
        statusCode: err.statusCode,
        message: msg,
      });
    }

    if (err instanceof UniqueViolationError) {
      // Handle UniqueViolationError
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: `${err.columns} already used`,
      });
    }

    if (err instanceof ForeignKeyViolationError) {
      // Handle ForeignKeyViolationError
      const msg = err.constraint.split('_');
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: `${msg[1]} not available`,
      });
    }

    if (err instanceof TokenExpiredError) {
      // Handle TokenExpiredError from JWT
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: err.message,
      });
    }

    if (err instanceof SendError) {
      // Handle custom SendError
      return res.status(err.statusCode).json({
        success: false,
        statusCode: err.statusCode,
        message: err.message,
      });
    }

    // For unknown errors, send a generic response
    console.error(err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal server error',
    });
  }
};
