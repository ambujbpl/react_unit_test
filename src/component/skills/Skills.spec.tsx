import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills LogsRoles', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  
  test('Start Learning button is eventually displayed', async () => {
    let view = render(<Skills skills={skills} />)
    // // uncomment to see roles in dom
    // logRoles(view.container);
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
