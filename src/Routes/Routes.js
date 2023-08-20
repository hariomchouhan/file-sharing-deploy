import express from "express";
import { downloadImage, uploadImage } from "../Controllers/ImageController.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

export default router;