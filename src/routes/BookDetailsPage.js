import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import { onSnapshot, doc } from 'firebase/firestore';
import { route } from 'preact-router';
import db from '../utils/firebase';
import BookDetails from '../components/BookDetails';

const BookDetailsPage = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const docRef = doc(db, 'books', bookId);

  const navigateBack = () => route('/shop');

  useEffect(() => {
    onSnapshot(docRef, (document) => setBook({ id: document.id, ...document.data() }));
  }, []);

  return (html`
    <h2>Book details</h2>
    ${book ? html`<${BookDetails} book=${book} />` : 'Loading...'}<br />
    <button onClick=${navigateBack}>Back</button>
  `);
};

export default BookDetailsPage;
