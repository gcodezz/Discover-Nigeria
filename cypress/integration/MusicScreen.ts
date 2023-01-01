describe('PlaylistsScreen', () => {
  it('loads default Playlists', () => {
    cy.visit('/');

    cy.get('a').contains('Music').click({ force: true });

    cy.contains('Playlist').click({ force: true });

    cy.contains('Live');

    cy.contains('Oldies');

    cy.contains('Afrobeats');

    cy.contains('Diaspora');

    cy.contains('Groups');

    cy.contains('Local');

    cy.contains('Gospel');
  });
});

describe('ArtistScreen', () => {
  it('loads default Artists', () => {
    cy.visit('/');

    cy.get('a').contains('Music').click({ force: true });

    cy.contains('Artists').click({ force: true });

    cy.contains('Adekunle Gold');

    cy.contains('Burnaboy');

    cy.contains('CDQ');

    cy.contains('Chinko Ekun');

    cy.contains('Darey');

    cy.contains('Dr SID');

    cy.contains('Davido');

    cy.contains('Dotman');

    cy.contains('Dai Verse');
  });
});

describe('YearsScreen', () => {
  it('loads default years', () => {
    cy.visit('/');

    cy.get('a').contains('Music').click({ force: true });

    cy.contains('Artists').click({ force: true });

    cy.contains('2010');

    cy.contains('2011');

    cy.contains('2012');

    cy.contains('2013');

    cy.contains('2014');

    cy.contains('2015');

    cy.contains('2016');

    cy.contains('2017');

    cy.contains('2018');

    cy.contains('2019');

    cy.contains('2019');

    cy.contains('2020');

    cy.contains('2021');

    cy.contains('2022');
  });
});
