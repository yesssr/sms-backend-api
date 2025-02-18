import { NextFunction, Router, Request, Response } from "express";
import { siswaRouter } from "./siswa";
import { errorHandler } from "../../middleware/error";

const router = Router();

router.use("/siswa", siswaRouter);
router.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});
export default router;
