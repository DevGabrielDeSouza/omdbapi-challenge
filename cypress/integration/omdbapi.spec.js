/// <reference types="cypress" />

const ID_DO_FILME = "tt1285016";
const API_KEY = "52ec71bf";

describe("Testes com a OMDb API", ()=>{
	it("Request do filme The Social Network", ()=>{
		cy.request("/?i="+ID_DO_FILME+"&apikey="+API_KEY).then((response)=>{
			expect(response.body).property("Title").to.equal("The Social Network");
			expect(response.body).property("Year").to.equal("2010");
			expect(response.body).property("Language").to.contains("English");
			expect(response.body).property("Language").to.contains("French");
		});
	});
});