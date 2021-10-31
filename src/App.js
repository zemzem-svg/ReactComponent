import React from "react";
import './App.css';
import Fullname from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";
import Photo from "./Component/Profile/ProfilePhoto";
import { Component } from "react";

class App extends Component{
  render(){
    return(
      <div className="App">
<Fullname></Fullname>
<Photo></Photo>
<Adress></Adress>
      </div>
      
    )
  }
}
export default App;