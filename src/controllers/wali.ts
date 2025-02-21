import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { waliQuery } from "../helpers/wali";
import { pagination, success } from "../utils/utils";

const waliControllers = {
  getAllWali: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listWali = await waliQuery.getAllWali(sekolah_id, limit, offset);
      const totalWali = await waliQuery.getTotalWali(sekolah_id);
      const page = pagination(
        totalWali[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all wali", 200, listWali, page);
    } catch (error) {
      next(error);
    }
  },

  addWali: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const wali = await waliQuery.addWali(req.body);
      success(res, "successfully add wali", 200, wali);
    } catch (error) {
      next(error);
    }
  },

  updateWali: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const wali = await waliQuery.updateWali(id, sekolah_id, req.body);
      success(res, "successfully update wali", 200, wali);
    } catch (error) {
      next(error);
    }
  },

  deleteWali: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const wali = await waliQuery.deleteWali(id, sekolah_id);
      success(res, "successfully delete wali", 200, wali);
    } catch (error) {
      next(error);
    }
  },
};

export { waliControllers };
