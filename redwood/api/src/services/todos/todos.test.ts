import { todos } from './todos'
import type { StandardScenario } from './todos.scenarios'

describe('todos', () => {
  scenario('returns all todos', async (scenario: StandardScenario) => {
    const result = await todos()

    expect(result.length).toEqual(Object.keys(scenario.todo).length)
  })
})
