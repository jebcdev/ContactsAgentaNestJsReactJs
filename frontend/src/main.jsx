
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Router } from './router/routes.jsx';
import { ContactsProvider } from './contexts/ContactsProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <ContactsProvider>
      <Router>
      </Router>
    </ContactsProvider>

  </>,
)
