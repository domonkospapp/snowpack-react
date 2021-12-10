import { html } from 'htm/preact';

const FirstComponent = () =>  {
    return html`
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
    `;
}

export default FirstComponent;