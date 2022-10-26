/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("displays 0 todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
   

//    checking if we have a heading tag with text Todo App
    cy.get("h1").should("have.text", "Todo App");
  });

  it("can add and remove todo items", () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = "I want to take my dog for a walk";
    const newItem2 = "I want to go to the restaurant";

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
  
    cy.get('[ data-input="todo-input"]').type(`${newItem}{enter}`);
    cy.get(`[data-button="Add-Todo"]`).click();

    cy.get('[ data-input="todo-input"]').type(`${newItem2}{enter}`);


    cy.get(`[data-button="Add-Todo"]`).click();

    // remove a Todo
    cy.get(`[data-Todo="${newItem}"]`).click();
  });

  it("Can add same todo again", () => {
    const newItem = "I want to take my dog for a walk";

    cy.get('[ data-input="todo-input"]').type(`${newItem}{enter}`);

    cy.get(`[data-button="Add-Todo"]`).click();
    cy.get(`[data-button="Add-Todo"]`).click();
  });
});
