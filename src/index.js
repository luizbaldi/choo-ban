import choo from 'choo';
import html from 'choo/html';

const app = choo();

app.route('/', (state, emit) => {
  return html`
    <div>
      Hello World
    </div>
  `
});

app.mount(document.getElementById('root'))

