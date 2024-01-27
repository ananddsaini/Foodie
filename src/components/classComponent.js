import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);  // Read about super props
        //Create state
        this.state = {
            //we create a object of name state to use it as a state variable
            count: 0,    // creation of first state variable
            count2: 3,   //creation of second state variable
        };
    }
    render() {
        return (<div>
            <h1>Name: {this.props.name} </h1>
            <p>Email:{this.props.Email} </p>
            <h4>Count:{this.state.count} </h4>
            
            <button onClick={() =>
                // We can't mutate state directly
                // never do this.state.count=1;
                this.setState(
                    {
                        count: 1,
                        count2: 5
                    }
                )
            }
            >SetCount</button>


        </div>)
    }
}
export default Profile;