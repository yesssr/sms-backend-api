import { Router } from "express";
import { tahunAjaranControllers } from "../../controllers/tahun_ajaran";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get(
  "/",
  paginationQueryValidate,
  tahunAjaranControllers.getAllTahunAjaran
);
router.post("/", tahunAjaranControllers.addTahunAjaran);
router.put("/:id", tahunAjaranControllers.updateTahunAjaran);
router.delete("/:id", tahunAjaranControllers.deleteTahunAjaran);

export { router as tahunAjaranRouter };
