import { render, screen } from '@testing-library/react'

import TopHeader from '.'

describe('<TopHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopHeader />)

    expect(
      screen.getByRole('heading', { name: /TopHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
