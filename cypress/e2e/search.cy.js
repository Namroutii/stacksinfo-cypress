describe("Search Bar Component", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app/");
  });

  it("should allow typing a search query", () => {
    const searchQuery = "react";
    cy.get('input[class="search-bar"]')
      .should("be.visible")
      .type(searchQuery)
      .should("have.value", searchQuery);
  });

  it("should verify search field presence", () => {
    cy.get('input[class="search-bar"]').should("be.visible");
  });

  it("should allow entering valid and invalid inputs", () => {
    const validInputs = ["react", "mobile", "exalt"];
    const invalidInputs = ["@", "&&&&"];

    validInputs.forEach((input) => {
      cy.get('input[class="search-bar"]')
        .clear()
        .type(input)
        .should("have.value", input);
    });

    invalidInputs.forEach((input) => {
      cy.get('input[class="search-bar"]').clear().type(input);
      cy.get('input[class="search-bar"]').should("not.have.value", input);
    });
  });
  it("should display relevant cards when searching for an existing company", () => {
    cy.get(".search-bar").type("Safarway{enter}");
    cy.get(".card-container").should("be.visible");
    cy.get(".company-name").should("contain", "Safarway");
    cy.get(".company-slogan").should("contain", "Ramallah");
  });

  it("should display cards for companies using a specific technology", () => {
    cy.get(".search-bar").type("React Native{enter}");
    cy.get(".card-result .result-item").should(
      "have.attr",
      "title",
      "React Native"
    );
  });

  it("should support searching for multiple keywords", () => {
    cy.get(".search-bar").type("Mobile Ramallah{enter}");
    cy.get(".card-container").should("be.visible");
    cy.get(".slider-element").should("contain", "Mobile");
    cy.get(".company-slogan").should("contain", "Ramallah");
  });
});
