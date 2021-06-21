/// <reference types="cypress" />

const ID_DO_FILME = Cypress.env("ID_DO_FILME");
const ID_FILME_INEXISTENTE = "tt9999999";
const API_KEY = Cypress.env("API_KEY");

describe("Testes com a OMDb API", () => {
	it("Request do filme The Social Network", () => {
		cy.request("/?i=" + ID_DO_FILME + "&apikey=" + API_KEY).then((response) => {
			expect(response.body).property("Title").to.equal("The Social Network");
			expect(response.body).property("Year").to.equal("2010");
			expect(response.body).property("Language").to.contains("English");
			expect(response.body).property("Language").to.contains("French");
		});
	});
	it("Request de filme inexistente", () => {
		cy.request("/?i=" + ID_FILME_INEXISTENTE + "&apikey=" + API_KEY).then(
			(response) => {
				expect(response.body).property("Response").to.equal("False");
				expect(response.body).property("Error").to.equal("Error getting data.");
			}
		);
	});
});