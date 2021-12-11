import { html } from 'htm/preact';
import { render, screen } from '@testing-library/preact';
import { expect } from 'chai';
import Menu from './Menu';

describe('Test menu elements', () => {
  it('Test menu count and texts', () => {
    render(html`<${Menu} />`);

    const links = screen.getAllByRole('link');

    expect(links.length).equal(3);
    expect(links[0].innerHTML).equal('Home');
    expect(links[1].innerHTML).equal('Shop');
    expect(links[2].innerHTML).equal('Contact');
  });

  it('Test home link', () => {
    render(html`<${Menu} />`);
    expect(screen.getByText('Home').getAttribute('href')).equal('/');
  });

  it('Test shop link', () => {
    render(html`<${Menu} />`);
    expect(screen.getByText('Shop').getAttribute('href')).equal('/shop');
  });

  it('Test contact link', () => {
    render(html`<${Menu} />`);
    expect(screen.getByText('Contact').getAttribute('href')).equal('/contact');
  });
});
