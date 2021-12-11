import { render } from 'preact';
import { html } from 'htm/preact';
import { Router } from 'preact-router';
import HomePage from './routes/HomePage';
import Menu from './components/Menu';
import ShopPage from './routes/ShopPage';
import ContactPage from './routes/ContactPage';
import BookDetailsPage from './routes/BookDetailsPage';

const App = () => (
  html`
      <h1>Book Shop</h1>
      <${Menu} /><br />
      <${Router}>
        <${HomePage} path="/" />
        <${ShopPage} path="/shop/" />
        <${BookDetailsPage} path="/shop/:bookId" />
        <${ContactPage} path="/contact" />
      <//>
    `);

render(html`<${App} />`, document.body);
