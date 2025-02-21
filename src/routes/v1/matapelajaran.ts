import { Router } from "express";
import { matapelajaranControllers } from "../../controllers/matapelajaran";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get(
  "/",
  paginationQueryValidate,
  matapelajaranControllers.getAllMatapelajaran
);
router.post("/", matapelajaranControllers.addMatapelajaran);
router.put("/:id", matapelajaranControllers.updateMatapelajaran);
router.delete("/:id", matapelajaranControllers.deleteMatapelajaran);

export { router as matapelajaranRouter };
