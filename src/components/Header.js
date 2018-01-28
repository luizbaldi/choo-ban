import html from 'bel';
import Nanocomponent from 'nanocomponent';

class Header extends Nanocomponent {
  constructor() {
    super();
  }

  createElement() {
    return html`
      <nav>
        <div class="nav-wrapper teal lighten-2">
          <a href="/" class="brand-logo center">Choo-ban</a>
        </div>
      </nav>
    `;
  }
}

export default Header;