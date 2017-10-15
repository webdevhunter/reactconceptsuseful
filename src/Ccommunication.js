// There are eight types of communictions in react.
// link: http://andrewhfarmer.com/component-communication/
// parent to child already implemented nothing but props
//instance method from parent to child
//Global variables already implemented that is why we are able to use for styling our elements
// things observed u can call any element even the child element and in class has to return something null or false is fine.



import React from 'react';
//using instance method
class Ccommunication extends React.Component{

render(){
    const mystyle=window.Seed;
return(
    <div style={mystyle}>
    <Childinstance ref={(foo)=>{this.foo=foo;}}/>
    <h3>from parent to child using instance method is done unable to render it in Jsx please check it again </h3>
    </div>
);
}
componentDidMount(){
    const x=this.foo.myFunc();
    console.log(x);
   }
}
class Childinstance extends React.Component{
    myFunc(){
        return 'Hey this is instance method referencing which is parent to child communication';
    }
    render(){
        return false;
    }
}

export default Ccommunication;