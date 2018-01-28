import choo from 'choo';

/* Styles */
import 'materialize-css/dist/css/materialize.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style/style.css';

/* Views */
import home from './views/home';
import notFound from './views/notFound';

/* Stores */
import boards from './stores/boards';
import boardItems from './stores/boardItems';

/* App */
const app = choo();

app.use(boards);
app.use(boardItems);

/* Routes */
app.route('/', home);
app.route('/*', notFound);

app.mount(document.getElementById('root'))

