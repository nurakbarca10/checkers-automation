import { locatorChecker } from "../locators/locators";
import { assertions } from "../../fixtures/assertions";

class Checkers {
  verifySiteIsUp() {
    cy.request("/game/checkers/").its("status").should("eq", 200);
  }

  //Function to verify the initial game setup
  verifyUIIsLoaded() {
    locatorChecker.board().should("be.visible");
    locatorChecker.heading().should("be.visible");
    locatorChecker.bluePieces().should("have.length", "12");
    locatorChecker.orangePieces().should("have.length", "12");
  }

  //Function to move the orange piece 1 times
  gameProgress() {
    cy.makeAMove("22", "13");
    cy.verifyOrangeMove("13");

    cy.makeAMove("31", "22");
    cy.verifyOrangeMove("22");

    cy.makeAMove("42", "33");
    cy.verifyBlueMove("42");

    cy.makeAMove("51", "33");
    cy.verifyOrangeMove("33");

    cy.makeAMove("33", "73");
    cy.verifyLegalMessage();

    cy.makeAMove("13", "24");
    cy.verifyOrangeMove("24");

    cy.makeAMove("62", "44");
    cy.verifyOrangeMove("44");

    cy.makeAMove("02", "13");
    cy.verifyOrangeMove("13");

    cy.makeAMove("13", "04");
    cy.verifyOrangeMove("04");

    cy.makeAMove("22", "13");
    cy.verifyOrangeMove("13");

    cy.makeAMove("11", "22");
    cy.verifyOrangeMove("22");

    cy.makeAMove("71", "62");
    cy.verifyBlueMove("51");

    cy.makeAMove("40", "62");
    cy.verifyOrangeMove("62");

    cy.makeAMove("00", "11");
    cy.verifyOrangeMove("11");

    cy.makeAMove("62", "53");
    cy.verifyOrangeMove("53");

    cy.makeAMove("53", "64");
    cy.verifyOrangeMove("64");

    cy.makeAMove("64", "75");
    cy.verifyOrangeMove("75");

    cy.makeAMove("44", "35");
    cy.verifyBlueMove("44");

    cy.makeAMove("33", "55");
    cy.makeAKingMove("37");
    cy.verifyDoubleCapture("37");

    cy.makeAMove("55", "37");
    cy.verifyKingPromotion("37");

    cy.verifyBlueMove("55");
  }

  //Function to restart the game
  restartGame() {
    cy.makeAMove("22", "13");
    cy.verifyOrangeMove("13");
    cy.contains("Restart...").click();
    locatorChecker.message().should("contain", assertions.restart);
  }

  // Function to click on the "Rules" link
  clickRulesLink() {
    locatorChecker.linkToRules().click();
  }

  // Function to verify redirection
  verifyRedirection() {
    cy.origin("https://en.wikipedia.org", () => {
      const expectedUrl =
        "https://en.wikipedia.org/wiki/English_draughts#Starting_position";

      cy.url().should("eq", expectedUrl);
    });
  }

  //Function to validate the logo on bottom of the page
  validateLogoVisible() {
    //Validate that the logo is visible
    locatorChecker.logoImage().should("be.visible");
  }

  //Function to validate logo attributes
  validateLogoAttributes() {
    //Validate logo attributes
    locatorChecker
      .logoImage()
      .should("have.attr", "src", "/image/logo.png")
      .and("have.attr", "alt", assertions.footerHeading)
      .and("have.attr", "title");
  }

  //Function to valdiate the iFrame visibility
  validateIFrameVisible() {
    locatorChecker.adIframe().should("exist").and("be.visible");
  }
}

export const checkers = new Checkers();
