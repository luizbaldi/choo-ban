import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

/* UI Components */
import BoardItem from '../components/BoardItem';

/* UI Instances */
const boardItem = new BoardItem();

class Board extends Nanocomponent {
  constructor(id, addNewItem, removeItem, moveItem, addItemComment) {
    super();
    
    this.id = id;
    this.addNewItem = addNewItem;
    this.removeItem = removeItem;
    this.moveItem = moveItem;
    this.addItemComment = addItemComment;
  }
  renderItems(items, itemComments) {
    
    return items.map(item => {
      let comments = itemComments.filter( itemComment => itemComment.boardId === this.id && itemComment.itemId === item.id);
      return new BoardItem(this.id, this.removeItem, this.moveItem, this.addItemComment).render(item, comments)
    });
  }
  createElement(title, items, itemComments) {
    return html`
      <div class="board">
        <div class="card teal darken-4">
          <div class="card-content white-text">
            <span class="card-title center">${title}</span>
            <hr />
            <div class="row">
              ${this.renderItems(items, itemComments)}
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