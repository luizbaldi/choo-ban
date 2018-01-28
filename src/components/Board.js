import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

/* UI Components */
import BoardItem from '../components/BoardItem';

/* UI Instances */
const boardItem = new BoardItem();

class Board extends Nanocomponent {
  createElement(title) {
    return html`
      <div class="col s12 m4">
        <div class="card teal darken-4">
          <div class="card-content white-text">
            <span class="card-title center">${title}</span>
            <div class="row">
              ${boardItem.render('Potatoe', 'Yah man potatu is good')}
              ${boardItem.render('Hmm', 'Ran out of ideas, I\'m sorry bro')}
            </div>
            <div class="container">
              <a class="waves-effect waves-light btn btn-block">
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