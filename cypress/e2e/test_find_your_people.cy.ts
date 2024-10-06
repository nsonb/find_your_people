describe('Testing the page basic functions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('https://jsonplaceholder.typicode.com/users', {
      fixture: 'user-list.json',
    });
  });
  it('loads without fail', () => {
    cy.get('.header').should('exist');
    cy.get('.header').contains('Find your People');
  });

  it('check top table content', () => {
    cy.get('.search-bar').should('exist');
    cy.get('.sort-tab').should('exist');
    cy.get('.sort-tab > :nth-child(1)').should('exist');
    cy.get('.sort-tab > :nth-child(2)').should('exist');
  });

  it('check table content', () => {
    cy.get('.user-table').should('exist');
    cy.get('.user-table').find('.user-card').should('have.length', 10);
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Chelsey Dietrich');
    cy.get('.user-card')
      .first()
      .contains('Suite 351, Skiles Walks, Roscoeview, 33263');
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Lucio_Hettinger@annie.ca');
  });

  it('check input filters correctly', () => {
    cy.get('input').should('exist');
    cy.get('input').type('ich');
    cy.get('.user-table').find('.user-card').should('have.length', 3);
    cy.get('.user-table')
      .find('.user-card')
      .last()
      .contains('Nicholas Runolfsdottir V');
    cy.get('.user-card')
      .last()
      .contains('Suite 729, Ellsworth Summit, Aliyaview, 45169');
    cy.get('.user-table')
      .find('.user-card')
      .last()
      .contains('Sherwood@rosamond.me');
  });

  it('check sort function working correctly', () => {
    cy.get('.sort-tab > :nth-child(2)').click();
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Patricia Lebsack');
    cy.get('.user-card')
      .first()
      .contains('Apt. 692, Hoeger Mall, South Elvis, 53919-4257');
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Julianne.OConner@kory.org');

    cy.get('.sort-tab > :nth-child(1)').click();
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Chelsey Dietrich');
    cy.get('.user-card')
      .first()
      .contains('Suite 351, Skiles Walks, Roscoeview, 33263');
    cy.get('.user-table')
      .find('.user-card')
      .first()
      .contains('Lucio_Hettinger@annie.ca');
  });
});
