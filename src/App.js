import {BrowserRouter,Routes ,Route } from "react-router-dom"
import './App.css';
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Create from "./components/create/Create";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/create" element={<Create />}></Route>

      </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
