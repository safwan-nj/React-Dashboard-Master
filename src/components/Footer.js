import React,{Component} from "react";

class Footer extends Component{
    render(){
        return(
                <footer className="footer mt-auto py-3 bg-light text-center" style={{position:"bottom"}}>
                    <div className="container">
                        <span className="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>
        )
    }
}
export default Footer;