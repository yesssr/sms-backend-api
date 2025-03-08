import { Router } from "express";
import { waliControllers } from "../../controllers/wali";
import { paginationQueryValidate } from "../../middleware/auth";

const router = Router();

router.get("/", paginationQueryValidate, waliControllers.getAllWali);
router.post("/", waliControllers.addWali);
router.get("/:id", waliControllers.getByIdWali);
router.put("/:id", waliControllers.updateWali);
router.delete("/:id", waliControllers.deleteWali);

export { router as waliRouter };
