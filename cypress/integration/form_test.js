describe("Test the inputs", function() {
	beforeEach(function() {
		cy.visit("http://localhost:3000/")
	})
	it("fill out the inputs", function () {
		cy.contains("Order Pizza").click()
		cy.get('[data-cy="name"]').type("Matthew").should("have.value", "Matthew")
		cy.get('#size').select("14").should("have.value", "14")
		cy.get('#crust').select("Thin Crust").should("have.value", "Thin Crust")
		cy.get('#pepperoni').check().should('be.checked')
		cy.get('#cheese').check().should('be.checked')
		cy.get('#sausage').check().should('be.checked')
		cy.contains("Submit").click()
	})
})