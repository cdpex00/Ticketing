import "./App.css";
import Header from "./components/Header";
import NavBarCom from "./components/NavBar";
import Ticketing from "./components/Ticketing";

function App() {
  return (
    <div className="App">
      <NavBarCom className="n-div" />
      <Header />
      <Ticketing />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
