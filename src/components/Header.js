import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

class Header extends Nanocomponent {
  createElement() {
    return html`
      <nav>
        <div class="nav-wrapper teal lighten-2">
          <a href="/" class="brand-logo center">Choo-ban</a>
        </div>
      </nav>
    `;
  }

  update() {
    return false;
  }
}

export default Header;