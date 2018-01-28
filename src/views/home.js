import html from 'choo/html';

/* UI Components */
import Header from '../components/Header';
import Board from '../components/Board';
import BoardAdd from '../components/BoardAdd';

/* UI Instances (This is kinda weird but I'm just following documentation */
const header = new Header();

const home = (state, emit) => {
  const renderBoards = () => {
    const { boards } = state;
    return boards.map(board => new Board().render(board.name));
  }

  const addNewBoard = () => {
    const name = prompt('Board name');

    if (name) {
      emit('boards:add', name);
    } else {
      alert('You should type the name to procced.');
    }
  }
  
  const boardAdd = new BoardAdd(addNewBoard);
  return html`
    <div class="row home-container">
      ${header.render()}
      <div class="content">
        ${renderBoards()}
        ${boardAdd.render()}
      </div>
    </div>
  `;
};


export default home;