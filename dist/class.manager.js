"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClassName = exports.deleteClass = exports.getClassByClassID = exports.getClass = void 0;
const axios_1 = __importDefault(require("axios"));
exports.getClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield axios_1.default.get('http://localhost:3010/class');
        res.send(answer.data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getClassByClassID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield axios_1.default.get(`http://localhost:3010/class/${req.params.classId}`);
        res.send(answer.data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield axios_1.default.delete(`http://localhost:3010/class/${req.params.classId}`);
        res.send(answer.data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateClassName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield axios_1.default.delete(`http://localhost:3010/class/name/${req.params.classId}`);
        res.send(answer.data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//# sourceMappingURL=class.manager.js.map