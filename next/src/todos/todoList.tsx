import React from "react";
import { useTodoQuery } from "../../graphql/types-and-hooks";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data, error } = useTodoQuery();

  function removeItem(id: string) {
    console.log("Remove item", id);
  }

  function toggleItem(id: string) {
    console.log("Toggle item", id);
  }

  return (
    <main>
      <h1>Todo</h1>
      <div>
        {data?.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={removeItem}
            onToggle={toggleItem}
          />
        ))}
      </div>
    </main>
  );
}
