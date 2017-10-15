import React from 'react';

// link for communications: https://www.ctheu.com/2015/02/12/how-to-communicate-between-react-components/#children-to-parent

class Cccallback extends React.Component{
    myFunc(name){
        console.log(name);
    
    }
    
    render(){
        const mystyle=window.Seed;
        return(
            <div style={mystyle}>
                <h3>Check the console child class state variable name will be console logged as krishna</h3>
                <Childclass myname={this.myFunc}/>
            </div>
        );
    }
}

class Childclass extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'krishna'};
    }
    render(){
        const myname=this.props.myname;
        // console.log(myname);
        // console.log(this.state.name);
        myname(this.state.name);
        
        return(
            <div>Hey I am a child component:</div>
        );
    }
}

export default Cccallback;