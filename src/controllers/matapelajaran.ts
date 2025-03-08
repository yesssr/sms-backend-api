import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { matapelajaranQuery } from "../helpers/matapelajaran";
import { pagination, success } from "../utils/utils";

const matapelajaranControllers = {
  getAllMatapelajaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listMatapelajaran = await matapelajaranQuery.getAllMatapelajaran(
        sekolah_id,
        limit,
        offset
      );
      const totalMatapelajaran = await matapelajaranQuery.getTotalMatapelajaran(
        sekolah_id
      );
      const page = pagination(
        totalMatapelajaran[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all matapelajaran", 200, listMatapelajaran, page);
    } catch (error) {
      next(error);
    }
  },

  addMatapelajaran: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const matapelajaran = await matapelajaranQuery.addMatapelajaran(req.body);
      success(res, "successfully add matapelajaran", 201, matapelajaran);
    } catch (error) {
      next(error);
    }
  },

  getByIdMatapelajaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const matapelajaran = await matapelajaranQuery.getMatapelajaranById(
        sekolah_id,
        id,
      );
      success(res, "get by id matapelajaran", 200, matapelajaran);
    } catch (error) {
      next(error);
    }
  },

  updateMatapelajaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const matapelajaran = await matapelajaranQuery.updateMatapelajaran(
        id,
        sekolah_id,
        req.body
      );
      success(res, "successfully update matapelajaran", 200, matapelajaran);
    } catch (error) {
      next(error);
    }
  },

  deleteMatapelajaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const matapelajaran = await matapelajaranQuery.deleteMatapelajaran(
        id,
        sekolah_id
      );
      success(res, "successfully delete matapelajaran", 200, matapelajaran);
    } catch (error) {
      next(error);
    }
  },
};

export { matapelajaranControllers };
