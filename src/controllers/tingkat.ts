import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { tingkatQuery } from "../helpers/tingkat";
import { pagination, success } from "../utils/utils";

const tingkatControllers = {
  getAllTingkat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listTingkat = await tingkatQuery.getAllTingkat(
        sekolah_id,
        limit,
        offset
      );
      const totalTingkat = await tingkatQuery.getTotalTingkat(sekolah_id);
      const page = pagination(
        totalTingkat[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all tingkat", 200, listTingkat, page);
    } catch (error) {
      next(error);
    }
  },

  addTingkat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const tingkat = await tingkatQuery.addTingkat(req.body);
      success(res, "successfully add tingkat", 200, tingkat);
    } catch (error) {
      next(error);
    }
  },

  getByIdTingkat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tingkat = await tingkatQuery.getTingkatById(
        sekolah_id,
        id,
      );
      success(res, "get by id tingkat", 200, tingkat);
    } catch (error) {
      next(error);
    }
  },

  updateTingkat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tingkat = await tingkatQuery.updateTingkat(
        id,
        sekolah_id,
        req.body
      );
      success(res, "successfully update tingkat", 200, tingkat);
    } catch (error) {
      next(error);
    }
  },

  deleteTingkat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tingkat = await tingkatQuery.deleteTingkat(id, sekolah_id);
      success(res, "successfully delete tingkat", 200, tingkat);
    } catch (error) {
      next(error);
    }
  },
};

export { tingkatControllers };
