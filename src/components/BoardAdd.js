import html from 'choo/html';
import Nanocomponent from 'nanocomponent';

class Board extends Nanocomponent {
  createElement() {
    return html`
      <div class="col s12 m6">
        <div class="card teal lighten-5">
          <div class="card-content valign-wrapper">
            <div class="board-add">
              <i class="medium material-icons">add_circle</i>
              <span>New board</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Board;