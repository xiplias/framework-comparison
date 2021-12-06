export const schema = gql`
  type Todo {
    id: Int!
    title: String!
    order: String!
    done: Boolean!
  }
  type Query {
    todos: [Todo] @skipAuth
    todo(id: Int!): Todo @skipAuth
  }
  type Mutation {
    createTodo(title: String!, order: String!): Todo @skipAuth
    updateTodoStatus(id: Int!, done: String!, order: String!): Todo @skipAuth
  }
`
