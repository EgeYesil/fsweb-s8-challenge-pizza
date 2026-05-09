describe('Pizza Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/siparis')
  })

  it('input a metin girebilmeli', () => {
    cy.get('#isim').type('Ege')
    cy.get('#isim').should('have.value', 'Ege')
  })

  it('birden fazla malzeme secebilmeli', () => {
    cy.get('input[type="checkbox"]').eq(0).click()
    cy.get('input[type="checkbox"]').eq(1).click()
    cy.get('input[type="checkbox"]').eq(2).click()
    cy.get('input[type="checkbox"]').eq(3).click()
  })

  it('formu gonderebilmeli', () => {
    cy.get('#isim').type('Ege')
    cy.get('input[type="radio"]').first().click()
    cy.get('input[type="checkbox"]').eq(0).click()
    cy.get('input[type="checkbox"]').eq(1).click()
    cy.get('input[type="checkbox"]').eq(2).click()
    cy.get('input[type="checkbox"]').eq(3).click()
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/onay')
  })
})