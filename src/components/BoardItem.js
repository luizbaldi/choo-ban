import html from 'choo/html'
import Nanocomponent from 'nanocomponent'
import swal from 'sweetalert2'

class BoardItem extends Nanocomponent {
  constructor(boardId, removeItem, moveItem, addItemComment) {
    super()
    this.boardId = boardId
    this.removeItem = removeItem
    this.moveItem = moveItem
    this.addItemComment = addItemComment
  }

  renderItemActions(item) {
    const actions = [
      {
        name: 'Remove',
        code: () => this.removeItem(item),
        icon: 'remove_circle_outline'
      },
      {
        name: 'Move',
        code: () => this.moveItem(this.boardId, item.id),
        icon: 'keyboard_arrow_right'
      },
      {
        name: 'Comment',
        code: () => this.addItemComment(this.boardId, item.id),
        icon: 'insert_comment'
      }
    ]

    return html`
      <div class="card-reveal board-item-reveal">
        <span class="card-title grey-text text-darken-4"><i class="material-icons close">close</i></span>
        <div class="actions">
          ${actions.map(action => html`
            <span class="grey-text center" onclick=${action.code}>
              ${action.name}
              <br />
              <i class="material-icons">${action.icon}</i>
            </span>
          `)}
        </div>
      </div>
    `
  }

  showComments(comments) {
    const title = comments.length ? 'Comments' : 'This item has no comments yet.'
    swal({
      title,
      html: `${comments.map(comment => `
          <li style="list-style: none">${comment.comment}</li>
          <hr />`)}`
    })
  }

  createElement(item, comments) {
    const { title, subtitle } = item
    return html`
      <div class="col s12">
        <div class="card teal darken-2">
          <div class="card-content white-text row">
            <i class="material-icons right activator">more_vert</i>
            <div class="board-item-title">${title}</div>
            <div class="board-item-subtitle">${subtitle}</div>
            <div class="board-item-comments">
              <span>${comments.length}</span>
              <i class="material-icons" onclick=${() => this.showComments(comments)}>comment</i>
            </div>
          </div>
          ${this.renderItemActions(item)}
        </div>
      </div>
    `
  }

  update() {
    return true
  }
}

export default BoardItem
