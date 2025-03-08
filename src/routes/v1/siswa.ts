import { Router } from "express";
import { siswaControllers } from "../../controllers/siswa";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, siswaControllers.getAllSiswa);
router.post("/", siswaControllers.addSiswa);
router.get("/:id", siswaControllers.getSiswaById);
router.put("/:id", siswaControllers.updateSiswa);
router.delete("/:id", siswaControllers.deleteSiswa);

export { router as siswaRouter };
