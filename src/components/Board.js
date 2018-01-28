import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

/* UI Components */
import BoardItem from '../components/BoardItem';

/* UI Instances */
const boardItem = new BoardItem();

class Board extends Nanocomponent {
  constructor(id, addNewItem) {
    super();
    
    this.id = id;
    this.addNewItem = addNewItem;
  }
  renderItems(items) {
    return items.map(item => new BoardItem().render(item.title, item.subtitle));
  }
  createElement(title, items) {
    return html`
      <div class="col s12 m4">
        <div class="card teal darken-4">
          <div class="card-content white-text">
            <span class="card-title center">${title}</span>
            <div class="row">
              ${this.renderItems(items)}
            </div>
            <div class="container">
              <a class="waves-effect waves-light btn btn-block" onclick=${() => this.addNewItem(this.id)}>
                <i class="material-icons left">add</i>
                New Item
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  update() {
    return true;
  }
}

export default Board;