//trying to do stateful and stateless components
import React, { Component } from 'react';


//this is stateful component
class Scomponents extends Component{
    render(){
         const mystyle=window.Seed
        return(
            <div style={mystyle}> 
                <h3>This is stateful component we can write states in it</h3>
                <Stateless nostate={'No state can be saved here. In js everything is fuction so normal react components can be class or function if it is a function it is called stateless'}>Hey this is props</Stateless>
            </div>

        );
    }
}

const Stateless=({nostate})=>{
    return(<h3>This is stateless component nothing but function</h3>);
}

export default Scomponents;