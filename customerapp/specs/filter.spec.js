describe("filter customers", () => {
    it("filter Geller", () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[placeholder="search by name"]')
            .type("Geller")
            .get(".row")
            .then(elems => {
                expect(elems.length).to.eq(2)
            })
    });
});