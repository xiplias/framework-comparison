import type { TodosQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TodoCell from '../TodoCell'

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ todos }: CellSuccessProps<TodosQuery>) => {
  return (
    <ul>
      {todos.map((item) => {
        return <TodoCell key={item.id} id={item.id} />
      })}
    </ul>
  )
}
