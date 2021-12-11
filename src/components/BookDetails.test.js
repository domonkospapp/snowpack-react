import { html } from 'htm/preact';
import { render, screen } from '@testing-library/preact';
import { expect } from 'chai';
import BookDetails from './BookDetails';

describe('BookDetails', () => {
  it('Correctly render title and author', () => {
    const book = { title: 'Fake title', author: 'Fake Author' };
    render(html`<${BookDetails} book=${book}/>`);

    const content = screen.getAllByRole('heading');

    expect(content[0].innerHTML).equal('Title: Fake title');
    expect(content[1].innerHTML).equal('Author: Fake Author');
  });
});
