import "./App.css";
import Header from "./components/Header";
import NavBarCom from "./components/NavBar";
import Ticketing from "./components/Ticketing";

function App() {
  return (
    <div className="App">
      <NavBarCom />
      <div className="text">
        <Header />
        <Ticketing />
      </div>

      {/* <Modal/> */}
    </div>
  );
}

export default App;
