describe("check assertions", () => {
     it("check assert 1 - should ", () => {
          cy.visit("https://example.cypress.io")
          cy.contains('get').click();

          cy.get('#query-btn')
               .should("contain", "Button")
               .and("have.class", "query-btn")
          //   .should("be.disabled")
          // this test will fail as the btn is enabled in UI.
               .and("be.enabled")
               .and("be.visible")
     });
     it("check assert 2 - expect", () => {
          cy.expect(true).to.be.true;
     });
     it("check assert 3 - assert", () => {
          assert.equal(4, "4", "equals");
          assert.strictEqual(4, "4", "stricts equals"); // this test will fail
     })
});