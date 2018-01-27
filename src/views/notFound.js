import html from 'choo/html';

const notFound = () => html`
  <div>
    <h2>Error 404 - Page not found</h2>
    <hr />
    <a href="/">Back to main page</a>
  </div>
`;

export default notFound;