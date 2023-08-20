import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./Routes/CustomRoutes";
// import Pokedex from './components/pokedex/Pokedex'

function App() {
  return (
    <>
      {/* <Pokedex/> */}
      <div className="outer-pokedex">
        <Link to="/">
          <h1 id="pokedex-heading">pokedex</h1>
        </Link>
        <CustomRoutes />
      </div>
    </>
  );
}

export default App;
