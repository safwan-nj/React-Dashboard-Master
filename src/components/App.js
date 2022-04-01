import React,{Component} from "react";
import Topnav from "./Topnav";
import Content from "./Content";
import Footer from "./Footer";
class App extends Component {
  render() {
    return  (
              <div >
                <Topnav/>
                <Content/>
                <Footer/>
              </div>
            );  
  }
}

export default App;
