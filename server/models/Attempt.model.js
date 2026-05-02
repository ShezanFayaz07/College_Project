import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    selectedOptionId: {
        type: String,
        enum: ["A", "B", "C", "D"]
    },
    selectedOptionText: {
        type: String,
        default: ""
    },
    correctOptionId: {
        type: String,
        enum: ["A", "B", "C", "D"]
    },
    isCorrect: {
        type: Boolean,
        required: true,
        default: false
    },
    timeTakenSeconds: {
        type: Number,
        default: 0
    }
},
    { _id: false }
);

const attemptSchema = new Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },
    shareId: {
        type: String,
        required: true
    },
    participant: {
        name: {
            type: String,
            default: "Anonymous"
        },
        email: {
            type: String,
            default: ""
        }
    },
    answers: {
        type: [answerSchema],
        default: []
    },
    score: {
        type: Number,
        default: 0
    },
    totalQuestions: {
        type: Number,
        default: 0
    },
    percentage: {
        type: Number,
        default: 0
    },
    passed: {
        type: Boolean,
        default: false
    },
    timeTakenSeconds: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["in_progress", "submitted", "expired"],
        default: "in_progress"
    },
    startedAt: {
        type: Date,
        default: Date.now
    },
    submittedAt: {
        type: Date
    }
},
    {timestamps: true}
);


attemptSchema.index({ quizId: 1, submittedAt: -1 });
attemptSchema.index({ shareId: 1 });
attemptSchema.index({ status: 1 });

export default mongoose.model("Attempt", attemptSchema);