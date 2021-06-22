describe("delete customer", () => {
    it("delete customer 1", () => {
        cy.visit("http://localhost:3000/");
        cy.get('button')
            .first()
            .click()
            .get(".row")
            .then(elems => {
                expect(elems.length).to.eq(5)
            })
    });
});