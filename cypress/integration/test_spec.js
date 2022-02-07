describe('first test',()=>{
        
    it('test case',()=>{
        expect(true).to.equal(true)
        expect(true).to.equal(true)
    })
    it('verify visit',()=>{
        cy.visit('http://localhost:8020', { responseTimeout: 2000000 , timeout: 1000000 })
        cy.wait(20000)
   })

   
})