"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.TodoController = void 0;
const tsoa_1 = require("tsoa");
const todosService_1 = require("./todosService");
const tsoa_2 = require("tsoa");
const tsoa_3 = require("tsoa");
const tsoa_4 = require("tsoa");
let TodoController = class TodoController extends tsoa_3.Controller {
    getUser(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new todosService_1.TodosServices().get(todoId);
        });
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, tsoa_2.Get)("{todoId}"),
    __param(0, (0, tsoa_4.Path)())
], TodoController.prototype, "getUser", null);
exports.TodoController = TodoController = __decorate([
    (0, tsoa_1.Route)("todos")
], TodoController);