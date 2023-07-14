describe("check assertions", () => {
     it("check assert 1", () => {
          cy.visit("https://example.cypress.io")
          cy.contains('get').click();

          cy.get('#query-btn')
               .should("contain", "Button")
               .should("have.class", "query-btn")
          //   .should("be.disabled")
          // this test will fail as the btn is enabled in UI.
               .should("be.enabled")
               .should("be.visible")
     })
});