import express from 'express';
import { uploadSource } from '../controllers/uploadController';
import { protect } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = express.Router();

router.post('/' , protect , upload.single('file'), uploadSource);
export default router;
