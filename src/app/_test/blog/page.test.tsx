import { render, screen } from "@testing-library/react"
import BlogPage from "@/app/blog/page"
import { vi } from 'vitest'

// Button 컴포넌트 모킹
vi.mock('@/app/_components/sub/Button', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <button type="button">{children}</button>
  ),
}))

describe('Blog Page', () => {
  it('페이지 랜더링이 올바르게 되야한다', () => {
    render(<BlogPage />)

    const heading = screen.getByRole('heading', { 
      name: /welcome to my devlog/i 
    })
    expect(heading).toBeInTheDocument()
 
    const loginButton = screen.getByRole('button', { 
      name: /log in/i 
    })
    expect(loginButton).toBeInTheDocument()
  })
})


