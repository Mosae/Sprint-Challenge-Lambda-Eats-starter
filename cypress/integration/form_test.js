describe('Testing our form inputs', function() {
	beforeEach(function() {
		cy.visit('http://localhost:3000/pizza');
	});
	it('Adds text to inputs and submits form', function() {
		cy.get('input[name="name"]')
			.type('Mosae')
			.should('have.value', 'Mosae');
		cy.get('textarea')
			.type('Leave at the door')
			.should('have.value', 'Leave at the door');
		cy.get('[type="checkbox"]').check();
		cy.get('button').click();
	});
});
