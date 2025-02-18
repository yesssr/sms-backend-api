import { Router } from "express";
import { siswaControllers } from "../../controllers/siswa";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, siswaControllers.getAllSiswa);
router.post("/", siswaControllers.addSiswa);

export { router as siswaRouter };
