import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  it('renders title and subtitle', () => {
    const title = 'Title'
    const subtitle = 'Subtitle'
    render(<Header title={title} subtitle={subtitle} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })

  it('renders h2 by default', () => {
    render(<Header title='Title' />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders h1 for primary', () => {
    render(<Header primary title='Title' />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
