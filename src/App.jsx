import * as React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Data from "./pages/Data";
import List from "./pages/List";
const App=()=>{

return( 
  <>
  
  <Router>
  <List/>

    <Routes>
  
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}>
    <Route path="/about/data/:id" element={<Data/>}/>
    </Route>
    <Route path="*" element={<Error/>}/>
    
    </Routes>
    </Router>

    </>
)
}
export default App;

