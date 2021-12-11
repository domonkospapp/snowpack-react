import { html } from 'htm/preact';

const BookDetails = ({ book }) => (html`
    Title: ${book.title} <br />
    Author: ${book.author}
`);

export default BookDetails;
