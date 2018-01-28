import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

class BoardItem extends Nanocomponent {
  createElement(title, subtitle) {
    return html`
      <div class="col s12">
        <div class="card teal darken-2">
          <div class="card-content white-text">
            <div class="board-item-title">${title}</div>
            <div class="board-item-subtitle">${subtitle}</div>
          </div>
        </div>
      </div>
    `;
  }

  update() {
    return true;
  }
};

export default BoardItem;