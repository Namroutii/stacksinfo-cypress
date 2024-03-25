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

  it('should display an error message for URL input', () => {                                                              
    cy.get('input[class="search-bar"]').should("be.visible").type('https://stacksinfo.web.app/').should("have.value", "https://stacksinfo.web.app/")
    cy.get('.Not-found-container').should('exist')
  })

  it('should display an error message for empty input', () => {
    cy.get('input[class="search-bar"]').should("be.visible").type('{enter}')
    cy.wait(2000)
    cy.get('.card-result .result-item').should('not.exist')
  })

  it('should display an error message for invalid input', () => {
    cy.get('input[class="search-bar"]').should("be.visible").type('abcd{enter}')
    cy.get('.Not-found-container').should('be.visible');
  });

  it('should clear search results when "Remove All" button is clicked', () => {
    cy.get('input[class="search-bar"]').should("be.visible").type('React Native{enter}');
    cy.get('input[class="search-bar"]').click();
    cy.get('.last-search-and-results .header-last .remove-button').should('exist').click();
    cy.get('.last-search-and-results').should('not.exist');
});


it('should display an error message for number input', () => {
  cy.get('input[class="search-bar"]').should("be.visible").type('100{enter}');
  cy.get('.Not-found-container').should('be.visible');
});


it('should persist search results after refreshing the page', () => {
  cy.get('input[class="search-bar"]').should("be.visible").type('React Native{enter}');
  cy.get('.card-result').should('be.visible');
  cy.get(".card-result .result-item").should(
    "have.attr",
    "title",
    "React Native"
  );
  cy.reload();
  cy.get('.result-container').should('be.visible');
  cy.get(".card-result .result-item").should(
    "have.attr",
    "title",
    "React Native"
  );
});

});
