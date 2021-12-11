import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import { collection, onSnapshot } from 'firebase/firestore';
import { route } from 'preact-router';
import db from '../utils/firebase';

const ShopPage = () => {
  const [books, setBooks] = useState(null);
  const collectionRef = collection(db, 'books');

  const updateBooks = (snapshot) => {
    setBooks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    onSnapshot(collectionRef, updateBooks);
  }, []);

  const renderBook = (book) => (html`
    <p>${book.title} ${book.author}</p>
    <button onClick=${() => route(`shop/${book.id}`)}>Open</button>
    `
  );

  return (html`
    <h2>List of books</h2>
    ${books ? books.map(renderBook) : 'Loading...'}
  `);
};

export default ShopPage;
