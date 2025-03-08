import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { tahunAjaranQuery } from "../helpers/tahun_ajaran";
import { pagination, success } from "../utils/utils";

const tahunAjaranControllers = {
  getAllTahunAjaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listTahunAjaran = await tahunAjaranQuery.getAllTahunAjaran(
        sekolah_id,
        limit,
        offset
      );
      const totalTahunAjaran = await tahunAjaranQuery.getTotalTahunAjaran(
        sekolah_id
      );
      const page = pagination(
        totalTahunAjaran[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all tahun ajaran", 200, listTahunAjaran, page);
    } catch (error) {
      next(error);
    }
  },

  addTahunAjaran: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const tahunAjaran = await tahunAjaranQuery.addTahunAjaran(req.body);
      success(res, "successfully add tahun ajaran", 200, tahunAjaran);
    } catch (error) {
      next(error);
    }
  },

  getByIdTahunAjaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tahunAjaran = await tahunAjaranQuery.getTahunAjaranById(
        sekolah_id,
        id
      );
      success(res, "get by id tahun ajaran", 200, tahunAjaran);
    } catch (error) {
      next(error);
    }
  },

  updateTahunAjaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tahunAjaran = await tahunAjaranQuery.updateTahunAjaran(
        id,
        sekolah_id,
        req.body
      );
      success(res, "successfully update tahun ajaran", 200, tahunAjaran);
    } catch (error) {
      next(error);
    }
  },

  deleteTahunAjaran: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const tahunAjaran = await tahunAjaranQuery.deleteTahunAjaran(
        id,
        sekolah_id
      );
      success(res, "successfully delete tahun ajaran", 200, tahunAjaran);
    } catch (error) {
      next(error);
    }
  },
};

export { tahunAjaranControllers };
