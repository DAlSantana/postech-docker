"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 3333;
console.log("PORT ==>", process.env.SERVER_PORT);
app.use(express_1.default.json());
dbConnect_1.default.on("error", console.log.bind(console, "Erro de conexão"));
dbConnect_1.default.once("open", () => {
    console.log("Conexão com o banco feita com sucesso !!! 🚀");
});
app.get("/", (req, res) => {
    res.status(200).send("Hello docker !!!");
    //LanguageController.listLanguages(req, res);
});
app.listen(port, () => console.log(`Server running at port ${port} 🥷`));
