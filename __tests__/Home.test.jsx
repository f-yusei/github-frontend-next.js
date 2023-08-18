import { render, screen,act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

it('Should render title text', () => {
    act(() => {
        render(<Home />)
    });
    expect(screen.getByText('Next.js!')).toBeInTheDocument()
})