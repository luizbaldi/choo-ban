import html from 'bel';
import Nanocomponent from 'nanocomponent';

class Header extends Nanocomponent {
  constructor() {
    super();
  }

  createElement() {
    return html`
      <header>Choo-ban</header>
    `;
  }
}

export default Header;