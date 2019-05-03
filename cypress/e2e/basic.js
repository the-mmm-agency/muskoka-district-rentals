describe('Muskoka District Rentals', () => {
  it('Loads the app', () => {
    cy.visit('localhost:8000')
    cy.percySnapshot()
  })
})
