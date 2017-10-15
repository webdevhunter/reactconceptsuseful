//controlled and uncontrolled components.

import React, { Component } from 'react';

class Ucomponent extends React.Component{
    constructor(props){
        super(props);
        this.functiontohandle=this.functiontohandle.bind(this);
    }
    functiontohandle(event){
        alert(this.input.value);
    }

    render(){
        const mystyle=window.Seed;
        return(
            <div>
            <form onSubmit={this.functiontohandle}>
                <h3>This is an uncontrolled component since we are using refs to take the input</h3>
                <label>Name:</label>
                <input type='text' ref={(input)=>this.input=input}/>
                <input type='submit' value='submit'/>
                
            </form>
            <Ccomponent/>
            </div>
        );
    }

}

//controlled component uses states directly to store and change state

class Ccomponent extends React.Component{
    constructor(props){
        super(props)
        this.state={name:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({name:event.target.value});
    }
    handleSubmit(event){
        alert(this.state.name);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h3>Hey this controlled State</h3>
            <label>Name:</label>
            <input type='text' onChange={this.handleChange}/>
            <input type='submit' value="submit"/>
            </form>
        );
    }
}

export default Ucomponent;