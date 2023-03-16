import Create from "./component/Create"
import {Routes,Route} from "react-router-dom"
import Read from "./component/Read";
import Update from "./component/Update";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
