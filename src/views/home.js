import html from 'choo/html';

/* UI Components */
import Header from '../components/Header';
import Board from '../components/Board';
import BoardAdd from '../components/BoardAdd';
import swal from 'sweetalert2';

/* UI Instances (This is kinda weird but I'm just following documentation */
const header = new Header();

const home = (state, emit) => {
  const renderBoards = () => {
    const { boards, boardItems } = state;
    return boards.map(board => {
      const currBoard = new Board(board.id, addNewItem);
      const currBoardItems = boardItems.filter(boardItem => boardItem.boardId === board.id);
      return currBoard.render(board.title, currBoardItems);
    });
  }

  const addNewBoard = async () => {
    const { value } = await swal({
      title: 'New board',
      html: `<input id="board-title" class="swal2-input" placeholder="Title">`,
      focusConfirm: false,
      preConfirm: () => document.getElementById('board-title').value
    })

    if (value) {
      emit('boards:add', value);
    } else {
      alert('You should type the name to procced.');
    }
  }

  const addNewItem = async (boardId) => {
    const { value } = await swal({
      title: 'New board item',
      html: `
        <input id="item-title" class="swal2-input" placeholder="Title">
        <input id="item-subtitle" class="swal2-input" placeholder="Subtitle">`,
      focusConfirm: false,
      preConfirm: () => {
        const title = document.getElementById('item-title').value;
        const subtitle = document.getElementById('item-subtitle').value;
        return { title, subtitle };
      }
    })
    
    if (value.title) {
      emit('boardItem:add', value, boardId);
    } else {
      swal(
        'Ops...',
        'You must fill the title to create an item :)',
        'warning'
      )
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