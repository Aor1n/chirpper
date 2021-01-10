import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
