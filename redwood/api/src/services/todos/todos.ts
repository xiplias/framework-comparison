import { db } from 'src/lib/db'

export const todos = () => {
  return db.todo.findMany()
}

export const todo = ({ id }) => {
  return db.todo.findUnique({
    where: { id },
  })
}

export const createTodo = ({ title, order }) =>
  db.todo.create({ data: { title, order } })
