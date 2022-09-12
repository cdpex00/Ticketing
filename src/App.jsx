import './App.css';
import Header from './components/Header';
import Modals from './components/Modals';
import NavBarCom from './components/NavBar';
import Ticketing from './components/Ticketing';

function App() {
  return (
    
    <div className="App">
    <NavBarCom className="n-div"/>
    <Header/>
      
      <Ticketing/>
      <Modals/>
    </div>
  );
}

export default App;
