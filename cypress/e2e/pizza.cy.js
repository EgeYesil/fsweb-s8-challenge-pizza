describe('Pizza Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/siparis')
  })

  it('input a metin girebilmeli', () => {
    cy.get('#isim').type('Ege')
    cy.get('#isim').should('have.value', 'Ege')
  })

  it('birden fazla malzeme secebilmeli', () => {
    cy.get('input[type="checkbox"]').eq(0).click({ force: true })
    cy.get('input[type="checkbox"]').eq(1).click({ force: true })
    cy.get('input[type="checkbox"]').eq(2).click({ force: true })
    cy.get('input[type="checkbox"]').eq(3).click({ force: true })
  })

  it('formu gonderebilmeli', () => {
    cy.get('#isim').type('Ege')
    cy.get('button').contains('S').click()
    cy.get('input[type="checkbox"]').eq(0).click({ force: true })
    cy.get('input[type="checkbox"]').eq(1).click({ force: true })
    cy.get('input[type="checkbox"]').eq(2).click({ force: true })
    cy.get('input[type="checkbox"]').eq(3).click({ force: true })
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/onay')
  })

  it('isim 3 karakterden az olunca buton disabled olmali', () => {
    cy.get('#isim').type('Ab')
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('4den az malzeme secilince buton disabled olmali', () => {
    cy.get('#isim').type('Ege')
    cy.get('input[type="checkbox"]').eq(0).click({ force: true })
    cy.get('input[type="checkbox"]').eq(1).click({ force: true })
    cy.get('input[type="checkbox"]').eq(2).click({ force: true })
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('anasayfadan siparis formuna gidebilmeli', () => {
    cy.visit('http://localhost:5173')
    cy.get('button').contains('ACIKTIM').click()
    cy.url().should('include', '/siparis')
  })
})