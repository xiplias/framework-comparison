import { render } from '@redwoodjs/testing/web'

import IndexPage from './IndexPage'

describe('IndexPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndexPage />)
    }).not.toThrow()
  })
})
