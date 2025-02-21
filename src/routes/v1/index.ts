import { NextFunction, Router, Request, Response } from "express";
import { siswaRouter } from "./siswa";
import { errorHandler } from "../../middleware/error";
import { auth, login } from "../../middleware/auth";
import { guruRouter } from "./guru";
import { matapelajaranRouter } from "./matapelajaran";
import { waliRouter } from "./wali";
import { ekskulRouter } from "./ekskul";
import { tingkatRouter } from "./tingkat";
import { tahunAjaranRouter } from "./tahun_ajaran";

const router = Router();

router.use("/login", login);
router.use(auth);
router.use("/siswa", siswaRouter);
router.use("/guru", guruRouter);
router.use("/wali", waliRouter);
router.use("/ekskul", ekskulRouter);
router.use("/tingkat", tingkatRouter);
router.use("/tahun-ajaran", tahunAjaranRouter);
router.use("/matapelajaran", matapelajaranRouter);
router.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});
export default router;
