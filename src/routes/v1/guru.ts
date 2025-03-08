import { Router } from "express";
import { guruControllers } from "../../controllers/guru";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, guruControllers.getAllGuru);
router.post("/", guruControllers.addGuru);
router.get("/:id", guruControllers.getGuruById);
router.put("/:id", guruControllers.updateGuru);
router.delete("/:id", guruControllers.deleteGuru);

export { router as guruRouter };
