import React from "react";
class Footer extends React.Component{render(){
    return<div>
        
        <p>HI</p>
        <h3>{this.props.name}</h3>
        <h5>{this.props.email}</h5>
        <h6>{this.props.phone}</h6>
        </div>;


}}
export default Footer;