describe('first test',()=>{
        
    it('Visit Tour of heroes',()=>{
        cy.visit('http://localhost:4200/dashboard')
    })
    it('Verify tour of heroes heading',()=>{
        cy.get('app-root > h1').should('have.text','Tour of Heroes')
    })
    it('verify dashboard',()=>{
        cy.get('nav > a:nth-child(1)').should('be.visible')
        cy.get('nav > a:nth-child(1)').click()
        cy.wait(1000)
        cy.get('app-dashboard > h2').should('have.text','Top Heroes')
    })
    it('verify top heroes',()=>{
        cy.get('app-dashboard > div > a').should('be.visible')
        cy.get('app-dashboard > div > a').should('have.length',4)
        cy.get('app-dashboard > div > a:nth-child(1)').click()
        cy.wait(1000)
        cy.get('app-hero-detail > div > h2').should('have.text','NARCO Details')
        cy.get('app-hero-detail > div > div:nth-child(2)').should('be.visible')
        cy.get('body > app-root > app-hero-detail > div > div:nth-child(3) > label').should('have.text','Hero name: ')
        cy.get('#hero-name').should('be.visible')
        cy.get('app-hero-detail > div > button:nth-child(4)').should('be.visible')
        cy.get('app-hero-detail > div > button:nth-child(5)').should('be.visible')
        cy.get('app-hero-detail > div > button:nth-child(4)').click()
        cy.wait(1000)
    })
    it('verify hero search',()=>{
        cy.get('#search-component > label').should('be.visible')
        cy.get('#search-box').should('be.visible')
        cy.get('#search-box').type('narco')
        cy.wait(1000)
    })

    it('test case',()=>{
        expect(true).to.equal(true)
        expect(true).to.equal(true)
    })
})