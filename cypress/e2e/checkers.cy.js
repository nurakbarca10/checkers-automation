import { checkers } from "../utils/pages/checkers";

describe("Checkers Test Suite", () => {
  beforeEach("", () => {
    cy.visit("/game/checkers/");
    checkers.verifySiteIsUp();
  });

  it("TC01 - Verify if the Site is Up and Running", () => {
    checkers.verifyUIIsLoaded();
  });

  it("TC02 - Validation of Game Progress, King Promotion & Double capture", () => {
    checkers.gameProgress();
  });

  it("TC03 - Validate the Restart Game", () => {
    checkers.restartGame();
  });

  it("TC04 - Validate Rules Link and Page Redirection", () => {
    checkers.clickRulesLink();
    checkers.verifyRedirection();
  });

  it("TC05 - Validate the Visibility of Logo", () => {
    checkers.validateLogoVisible();
    checkers.validateLogoAttributes();
  });

  it("TC06 - Validate the iFrame", () => {
    checkers.validateIFrameVisible();
  });
});
