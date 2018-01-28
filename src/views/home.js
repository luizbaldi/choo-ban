import html from 'choo/html';

/* UI Components */
import Header from '../components/Header';
import Board from '../components/Board';
import BoardAdd from '../components/BoardAdd';


/* UI Instances (This is kinda weird but I'm just following documentation */
const header = new Header();
const board = new Board();
const boardAdd = new BoardAdd();

const home = () => html`
  <div class="row home-container">
    ${header.render()}
    <div class="content">
      ${board.render('Some random kanban')}
      ${boardAdd.render()}
    </div>
  </div>
`;


export default home;