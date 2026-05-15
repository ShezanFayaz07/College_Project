import * as documentService from '../services/documentService.js';

export const uploadSource = async (req , res) => {
    try {
        const file = req.file;
        const { text } = req.body;

        const userId = req.user._id;

        if (!file && !text) {
            return res.status(400).json({ message: "Please upload a file or paste text." });
        }

        const document = await documentService.processAndSaveDocument(userId, file, text);

        res.status(201).json({
            message: "Document processed successfully",
            documentId: document._id,
            wordCount: document.wordCount,
            sourceType: document.sourceType
        });
    } catch (error) {
                console.error("Upload Error:", error.message);
        res.status(400).json({ message: error.message || "Failed to process document" });
    }
}