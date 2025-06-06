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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_bankCard_1 = require("../controller/bankCard/create-bankCard");
const bankCardRouter = (0, express_1.Router)();
bankCardRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_bankCard_1.createBankCard)(req, res);
}));
bankCardRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_bankCard_1.createBankCard)(req, res);
}));
