import choo from 'choo';

/* Views */
import home from './views/home';
import notFound from './views/notFound';

/* App */
const app = choo();

/* Routes */
app.route('/', home);
app.route('/*', notFound);

app.mount(document.getElementById('root'))

