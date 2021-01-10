import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <h3> Welcome to Chirpper </h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
