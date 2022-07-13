import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <NavBar />
      <div className='pages'>
        <Home />
      </div>
    </div>
  );
}

export default App;
