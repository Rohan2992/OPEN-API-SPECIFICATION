"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosServices = void 0;
class TodosServices {
    get(id) {
        return {
            id,
            title: "New Post",
            description: "This is a new post",
            published: true
        };
    }
    create(toDoCreationParams) {
        return {
            id: "1",
            title: "New Post",
            description: "This is a new post",
            published: true
        };
    }
}
exports.TodosServices = TodosServices;
