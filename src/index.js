import choo from 'choo';

/* Styles */
import 'materialize-css/dist/css/materialize.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style/style.css';

/* Views */
import home from './views/home';
import notFound from './views/notFound';

/* Stores */
import persistence from './stores/persistence';
import boards from './stores/boards';
import boardItems from './stores/boardItems';
import itemComments from './stores/itemComments';

/* App */
const app = choo();

app.use(persistence);
app.use(boards);
app.use(boardItems);
app.use(itemComments);

/* Routes */
app.route('/', home);
app.route('/*', notFound);

app.mount(document.getElementById('root'))

