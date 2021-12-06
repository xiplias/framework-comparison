import { useMutation } from '@redwoodjs/web'
import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const CREATE_TODO = gql`
  mutation CreateTodoMutation($title: String!, $order: String!) {
    createTodo(title: $title, order: $order) {
      id
    }
  }
`

const TodoForm = () => {
  const [create, { loading, error }] = useMutation(CREATE_TODO)

  const onSubmit = (data) => {
    console.log({ data })
    create({ variables: { title: data.title, order: 'a' } })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label name="title" className="label" errorClassName="label error" />
      <TextField
        name="title"
        className="input"
        errorClassName="input error"
        validation={{ required: true }}
      />
      <FieldError name="name" className="error-message" />
      <Submit className="button">Save</Submit>
    </Form>
  )
}

export default TodoForm
