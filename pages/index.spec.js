import {render, screen} from '@testing-library/react'
import Index from './index'

describe('Index', () => {
    it('renders a welcome message', () => {
        render(<Index />)
        expect(screen.getByTestId('title')).toHaveTextContent(
        'Func C-1 Welcome to Next.js!',
        )
    })
    }
)