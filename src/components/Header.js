import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

class Header extends Nanocomponent {
  createElement() {
    return html`
      <nav class="custom-nav">
        <div class="nav-wrapper teal lighten-2">
          <a href="/" class="brand-logo center">Choo-ban</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="https://github.com/luizbaldi/choo-ban" target="_blank">Github</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  update() {
    return false;
  }
}

export default Header;