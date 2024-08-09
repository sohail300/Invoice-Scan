import express from "express";
import { scanImage, scanPDF } from "../controller/scan";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/pdf", upload.single("pdf"), scanPDF);
router.post("/image", upload.single("image"), scanImage);

export default router;
