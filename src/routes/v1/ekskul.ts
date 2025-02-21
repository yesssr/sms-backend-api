import { Router } from "express";
import { ekskulControllers } from "../../controllers/ekskul";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, ekskulControllers.getAllEkskul);
router.post("/", ekskulControllers.addEkskul);
router.put("/:id", ekskulControllers.updateEkskul);
router.delete("/:id", ekskulControllers.deleteEkskul);

export { router as ekskulRouter };
