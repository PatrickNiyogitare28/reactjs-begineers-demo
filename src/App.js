import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from './views/login';
import CounterPage from './views/counter';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/counter' element={<CounterPage />} />
      </Routes>
    </Router>
  );
}

export default App;