class LocatorChecker {
  message = () => cy.get('[id="message"]');
  move = (pos) => cy.get(`[name="space${pos}"]`);
  heading = () => cy.get("h1");
  board = () => cy.get("#board");
  bluePieces = () => cy.get("img[src*='me1.gif']");
  orangePieces = () => cy.get("img[src*='you1.gif']");
  linkToRules = ()=> cy.get('a[href="https://en.wikipedia.org/wiki/English_draughts#Starting_position"]');
  logoImage = () => cy.get('#navigation .mainLogo img');
  adIframe = () => cy.get('iframe[id="google_ads_iframe_/71161633,1003265/GFTB_gamesforthebrain/sidebar_0"]');
  
}
export const locatorChecker = new LocatorChecker();
