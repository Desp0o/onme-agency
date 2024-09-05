import "./App.css";
import behanceIcon1 from "./assets/behance1.png";


function App() {
  return (
    <div className="main">
      <p className="under_con">the website is under construction</p>
      <p className="email">Email: info@onme.agency</p>

      <div className="">
        <a href="https://www.behance.net/onmeagency" target="_blank" rel="noreferrer" className="behance_block">
          <img src={behanceIcon1} alt="behance icon" className="behance_icon" />
          <p className="behance_link"> See our works on Behance</p>
        </a>
      </div>
    </div>
  );
}

export default App;
