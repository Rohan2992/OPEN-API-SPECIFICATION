import { Route } from "tsoa";
import { TodosServices } from "./todosService";
import { Get } from "tsoa";
import { Controller } from "tsoa";
import { Path } from "tsoa";
import { Todo } from "./todo";

@Route("todos")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getUser(@Path() todoId: string):Promise<Todo> {
    return new TodosServices().get(todoId);
  }
}
