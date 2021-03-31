import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import Contacts from './components/Contacts';
import Headers from './components/Headers'
function App() {
  return (
    <Provider>
      <div className="App">
        <Headers branding="Contact Manager" />
        <div
          className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
