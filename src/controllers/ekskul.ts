import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ekskulQuery } from "../helpers/ekskul";
import { pagination, success } from "../utils/utils";

const ekskulControllers = {
  getAllEkskul: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listEkskul = await ekskulQuery.getAllEkskul(
        sekolah_id,
        limit,
        offset
      );
      const totalEkskul = await ekskulQuery.getTotalEkskul(sekolah_id);
      const page = pagination(
        totalEkskul[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all ekskul", 200, listEkskul, page);
    } catch (error) {
      next(error);
    }
  },

  addEkskul: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const ekskul = await ekskulQuery.addEkskul(req.body);
      success(res, "successfully add ekskul", 200, ekskul);
    } catch (error) {
      next(error);
    }
  },

  updateEkskul: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const ekskul = await ekskulQuery.updateEkskul(id, sekolah_id, req.body);
      success(res, "successfully update ekskul", 200, ekskul);
    } catch (error) {
      next(error);
    }
  },

  deleteEkskul: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const ekskul = await ekskulQuery.deleteEkskul(id, sekolah_id);
      success(res, "successfully delete ekskul", 200, ekskul);
    } catch (error) {
      next(error);
    }
  },
};

export { ekskulControllers };
