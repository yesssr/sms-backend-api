import { NextFunction, Request, Response } from "express";

let listSiswa: any[] = [];
for (let i = 0; i < 10; i++) {
  const element = {
    id: i + 1,
    sekolah_id: "uncil_dua",
    nis: `247006111${i + 1}`,
    email: `murid${i + 1}@gmail.com`,
    name: `murid${i + 1}`,
    password: `maret_beres_tawa_april`,
    foto: `fotomurid${i + 1}`,
  };
  listSiswa.push(element);
}

const siswaControllers = {
  getAllSiswa: (req: Request, res: Response, next: NextFunction) => {
    try {
      let sendList = [];
      for (let i = Number(req.query.start); i < Number(req.query.end); i++) {
        sendList.push(listSiswa[i]);
      }
      let data = {
        ...sendList,
        total: listSiswa.length,
      }
      res.status(200).send({
        success: true,
        message: "get all siswa",
        data,
      });
    } catch (error) {
      next(error);
    }
  },

  addSiswa: (req: Request, res: Response, next: NextFunction) => {
    try {
      listSiswa.push(req.body);
      res.status(200).send({
        success: true,
        message: "add siswa successfully",
        data: listSiswa,
      });
    } catch (error) {
      next(error);
    }
  },
};

export { siswaControllers };
