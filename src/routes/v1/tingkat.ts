import { Router } from "express";
import { tingkatControllers } from "../../controllers/tingkat";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, tingkatControllers.getAllTingkat);
router.post("/", tingkatControllers.addTingkat);
router.put("/:id", tingkatControllers.updateTingkat);
router.delete("/:id", tingkatControllers.deleteTingkat);

export { router as tingkatRouter };
