import { Todo } from "./todo";

export type toDoCreationParams = Pick<Todo, "title" | "description">;

export class TodosServices {
  public get(id: string): Todo {
    return {
      id,
      title: "New Post",
      description: "This is a new post",
      published: true
    };
  }

  public create(toDoCreationParams: toDoCreationParams): Todo {
    return {
      id: "1",
      title: "New Post",
      description: "This is a new post",
      published: true
    };
  }
}
