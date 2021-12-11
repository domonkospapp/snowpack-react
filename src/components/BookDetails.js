import { html } from 'htm/preact';

const BookDetails = ({ book }) => (html`
    <h3>Title: ${book.title}</h3>
    <h3>Author: ${book.author}</h3>
`);

export default BookDetails;
