import choo from 'choo';

/* Styles */
import 'materialize-css/dist/css/materialize.min.css';
import './style/style.css';

/* Views */
import home from './views/home';
import notFound from './views/notFound';

/* Stores */
import boards from './stores/boards';

/* App */
const app = choo();

app.use(boards);

/* Routes */
app.route('/', home);
app.route('/*', notFound);

app.mount(document.getElementById('root'))

