import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoForm from 'src/components/Form/Form'
import TodosCell from 'src/components/TodosCell'

const TodoPage = () => {
  return (
    <>
      <MetaTags
        title="Todo"
        // description="Todo description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <TodosCell />
      <TodoForm />
    </>
  )
}

export default TodoPage
