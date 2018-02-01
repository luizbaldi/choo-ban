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
    const { boards, boardItems, itemComments } = state;
    return boards.map(board => {
      const currBoard = new Board(board.id, addNewItem, removeItem, moveItem, addItemComment);
      const currBoardItems = boardItems.filter(boardItem => boardItem.boardId === board.id);
      return currBoard.render(board.title, currBoardItems, itemComments);
    });
  }

  const addNewBoard = async () => {
    const { value } = await swal({
      title: 'New board',
      html: `<input id="board-title" class="swal2-input" placeholder="Title">`,
      focusConfirm: false,
      preConfirm: () => document.getElementById('board-title').value
    })

    if (typeof value === 'string') {
      emit('boards:add', value);
    } else {
      swal(
        'Ops...',
        'You should type the board title to procced :)',
        'warning'
      );
    }
  }

  const addNewItem = async (boardId) => {
    const { value } = await swal({
      title: 'New board item',
      html: `
        <input id="item-title" class="swal2-input" placeholder="Title">
        <input id="item-subtitle" class="swal2-input" placeholder="Subtitle (optional)">`,
      focusConfirm: false,
      preConfirm: () => {
        const title = document.getElementById('item-title').value;
        const subtitle = document.getElementById('item-subtitle').value;
        return { title, subtitle };
      }
    });
    
    if (value.title) {
      emit('boardItem:add', value, boardId);
    } else {
      swal(
        'Ops...',
        'You must fill the title to create an item :)',
        'warning'
      );
    }
  }

  const addItemComment = async (boardId, itemId) => {
    const { value } = await swal({
      title: 'New comment',
      html: `<input id="board-title" class="swal2-input" placeholder="Input your comment...">`,
      focusConfirm: false,
      preConfirm: () => document.getElementById('board-title').value
    })
    if (value) {
      emit('itemComment:add', boardId, itemId, value);
    }
    
  }

  const moveItem = async (boardId, itemId) => {
    const inputOptions = {};
    state.boards.forEach(board => {
      if (board.id !== boardId) {
        inputOptions[board.id] = board.title;
      }
    });
    if (Object.values(inputOptions).length) {
      const { value } = await swal({
        title: 'Move board item',
        input: 'select',
        inputOptions,
        inputPlaceholder: 'Select a board destination',
        showCancelButton: true,
        preConfirm: boardId => Promise.resolve(parseInt(boardId))
      });
  
      if (value) {
        emit('boardItem:move', itemId, value);
        emit('itemComment:move', itemId, boardId, value)
      }
    } else {
      swal(
        'Ops...',
        'Seems like you have no boards to move yet. Add more boards on \'New board\' button :)',
        'warning'
      );
    }
  }

  const removeItem = (item) => {
    emit('boardItem:remove', item.id);
    swal(
      'Done!',
      `${item.title} was sucessfully removed.`,
      'success'
    );
  }
  
  const boardAdd = new BoardAdd(addNewBoard);
  return html`
    <div class="home-container">
      ${header.render()}
      <div class="content">
        ${renderBoards()}
        ${boardAdd.render()}
      </div>
    </div>
  `;
};


export default home;