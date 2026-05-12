import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req , file , cb) => {
    const allowedMimeTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
        'text/plain'
    ];

    if (allowedMimeTypes.includes(file.mimetype)){
        cb(null , true);
    }
    else{
        cb(new Error("Invalid file type. Only PDF, DOCX, and TXT are allowed."), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10 MB
});