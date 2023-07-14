it("checking my portfolio website", () => {
     cy.visit("https://www.google.com/");
     
     const searchBtn = cy.get('#APjFqb');

     searchBtn.type("vaibhav matere");
     
     // To access
     // approach 1 using - "cy.get"
     
     // const searchBtnAfterTxt = cy.get('.aajZCb > .lJ9FBc > center > .gNO89b');

     // approach 2 - using "cy.contains"
     const searchBtnAfterTxt = cy.contains('Google Search');

     //  To perform click event 
     // approach 1 - using.click()
     searchBtnAfterTxt.click();

     // approach 2 - using {enter}
     // const searchBtnAfterTxt = cy.contains('Google Search {enter}');

});
