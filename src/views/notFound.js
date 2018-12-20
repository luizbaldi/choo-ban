import html from 'choo/html'

const notFound = () => html`
  <div class="container center">
    <h2>
      Error 404 - Page not found
    </h2>    
    <hr />
    <a href='/' class="waves-effect waves-light btn btn-block">
      Back to main page
    </a>
  </div>
`

export default notFound
