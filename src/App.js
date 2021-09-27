import './App.css';
import Nav from './components/Navbar/Nav';
import Search from './components/Search/Search';
import Time from './components/Time/Time';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Time/>
      <Search/>
    </div>
  );
}

export default App;
