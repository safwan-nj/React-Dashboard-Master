import React,{Component} from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
class Content extends Component {
    render() {
        return  (
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar/>
                            <Hero/>
                        </div>
                    </div>
                );
    }
}
export default Content;