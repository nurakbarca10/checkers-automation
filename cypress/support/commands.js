import { assertions } from "../fixtures/assertions";
import { locatorChecker } from "../utils/locators/locators";

Cypress.Commands.add("makeAMove", (startingPos, endingPos) => {
  locatorChecker.move(startingPos).click();
  locatorChecker.move(endingPos).click();
  /*
    1.The site is not calling any API so we cannot intercept the API and wait for it.
    2.When we are trying to wait for a specific message such as Make a move on the element id="message", 
    the event gets interrupted and freezes, which makes the test fail.
    3.After making 1-2 moves, when I am waiting for a checker piece by asserting on the attribute src 
    (This is auto waiting in cypress, the official concept is retry-ability https://docs.cypress.io/app/core-concepts/retry-ability), 
    the event gets interrupted again and hence the test fails.
  */
  cy.wait(2000);
});

Cypress.Commands.add("makeAKingMove", (endingPos) => {
  cy.contains(assertions.doubleMoveMessage).should("be.visible");
  locatorChecker.move(endingPos).click();
  cy.wait(2000);
});

Cypress.Commands.add("verifyBlueMove", (endingPos) => {
  locatorChecker.move(endingPos).then((value) => {
    cy.wrap(value).should("have.attr", "src", assertions.bluePiece);
  });
});

Cypress.Commands.add("verifyOrangeMove", (endingPos) => {
  locatorChecker.move(endingPos).then((value) => {
    cy.wrap(value).should("have.attr", "src", assertions.orangePiece);
  });
  locatorChecker.message().should("contain", assertions.move);
});

Cypress.Commands.add("verifyLegalMessage", () => {
  locatorChecker.message().should("contain", assertions.diagonalMessage);
});

Cypress.Commands.add("verifyKingPromotion", (endingPos) => {
  locatorChecker.move(endingPos).then((value) => {
    cy.wrap(value).should("have.attr", "src", assertions.kingPromotion);
  });
});

Cypress.Commands.add("verifyDoubleCapture", (endingPos) => {
  locatorChecker.move(endingPos).then((value) => {
    cy.wrap(value).should("have.attr", "src", assertions.doubleCapture);
  });
  locatorChecker.message().should("contain", assertions.move);
});
