import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { siswaQuery } from "../helpers/siswa";
import { pagination, success } from "../utils/utils";

const siswaControllers = {
  getAllSiswa: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const listSiswa = await siswaQuery.getAllSiswa(sekolah_id, limit, offset);
      const totalSiswa = await siswaQuery.getTotalSiswa(sekolah_id);
      const page = pagination(
        totalSiswa[0].total!,
        Number(req.query.page),
        Number(req.query.length)
      );
      success(res, "get all siswa", 200, listSiswa, page);
    } catch (error) {
      next(error);
    }
  },

  addSiswa: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sekolah_id } = req.app.locals.credentials;
      req.body.id = uuidv4();
      req.body.sekolah_id = sekolah_id;
      const siswa = await siswaQuery.addSiswa(req.body);
      success(res, "successfully add siswa", 200, siswa);
    } catch (error) {
      next(error);
    }
  },

  updateSiswa: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const siswa = await siswaQuery.updateSiswa(id, sekolah_id, req.body);
      success(res, "successfully update siswa", 200, siswa);
    } catch (error) {
      next(error);
    }
  },

  deleteSiswa: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const { sekolah_id } = req.app.locals.credentials;
      const siswa = await siswaQuery.deleteSiswa(id, sekolah_id);
      success(res, "successfully delete siswa", 200, siswa);
    } catch (error) {
      next(error);
    }
  },
};

export { siswaControllers };
