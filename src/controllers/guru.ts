import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { guruQuery } from "../helpers/guru";
import { pagination, success } from "../utils/utils";

const guruControllers = {
  getAllGuru: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listGuru = await guruQuery.getAllGuru(sekolah_id, limit, offset);
      const totalGuru = await guruQuery.getTotalGuru(sekolah_id);
      const page = pagination(
        totalGuru[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all guru", 200, listGuru, page);
    } catch (error) {
      next(error);
    }
  },

  addGuru: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const guru = await guruQuery.addGuru(req.body);
      success(res, "successfully add guru", 201, guru);
    } catch (error) {
      next(error);
    }
  },

  getGuruById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const guru = await guruQuery.getGuruById(sekolah_id, id);
      success(res, "get by id guru", 200, guru);
    } catch (error) {
      next(error);
    }
  },

  updateGuru: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const guru = await guruQuery.updateGuru(id, sekolah_id, req.body);
      success(res, "successfully update guru", 200, guru);
    } catch (error) {
      next(error);
    }
  },

  deleteGuru: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const guru = await guruQuery.deleteGuru(id, sekolah_id);
      success(res, "successfully delete guru", 200, guru);
    } catch (error) {
      next(error);
    }
  },
};

export { guruControllers };
