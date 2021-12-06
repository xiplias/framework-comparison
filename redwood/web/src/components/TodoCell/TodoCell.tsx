import type { FindTodoQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTodoQuery($id: Int!) {
    todo: todo(id: $id) {
      id
      title
      order
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ todo }: CellSuccessProps<FindTodoQuery>) => {
  return (
    <div>
      [{todo.order}] {todo.title}
    </div>
  )
}
