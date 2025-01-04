import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <HomePage />
    </div>
  );
}

export default App;
