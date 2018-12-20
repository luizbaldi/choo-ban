import html from 'choo/html'
import Nanocomponent from 'nanocomponent'

class Board extends Nanocomponent {
  constructor(addNewBoard) {
    super()

    this.addNewBoard = addNewBoard
  }

  createElement() {
    return html`
      <div class="board">
        <div class="card teal lighten-5">
          <div class="card-content">
            <div class="board-add" onclick="${this.addNewBoard}">
              <i class="medium material-icons">add_circle</i>
              <span>New board</span>
            </div>
          </div>
        </div>
      </div>
    `
  }

  update() {
    return false
  }
}

export default Board
