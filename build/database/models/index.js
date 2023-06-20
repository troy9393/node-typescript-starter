"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const configuration_1 = __importDefault(require("../configuration"));
const department_1 = __importDefault(require("./department"));
const sequelize = configuration_1.default.getInstance();
department_1.default.initModel(sequelize);
exports.db = {
    sequelize,
    Department: department_1.default,
};
