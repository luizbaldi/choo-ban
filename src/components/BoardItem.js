import html from 'choo/html';
import Nanocomponent from 'nanocomponent';
import materialize from 'materialize-css';

class BoardItem extends Nanocomponent {
  constructor(removeItem) {
    super();

    this.removeItem = removeItem;
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
        code: () => console.log('moving...'),
        icon: 'keyboard_arrow_right'
      }
    ];
    
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
    `;
  }
  createElement(item) {
    const { title, subtitle } = item;
    return html`
      <div class="col s12">
        <div class="card teal darken-2">
          <div class="card-content white-text row">
            <i class="material-icons right activator">more_vert</i>
            <div class="board-item-title">${title}</div>
            <div class="board-item-subtitle">${subtitle}</div>
          </div>
          ${this.renderItemActions(item)}
        </div>
      </div>
    `;
  }

  update() {
    return true;
  }
};

export default BoardItem;