import html from 'choo/html';

/* UI Components */
import Header from '../components/Header';

/* UI Instances (This is kinda weird but I'm just following documentation */
const header = new Header();

const home = () => html`
  <div>
    ${header.render()}
    Hello World
  </div>
`;


export default home;