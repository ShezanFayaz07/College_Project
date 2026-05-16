import express from 'express';
import { uploadSource } from '../controllers/uploadController.js';
import { protect } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/' , protect , upload.single('file'), uploadSource);
export default router;
