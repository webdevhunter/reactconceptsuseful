//you can learn two types of components from here
//next you will learn stateful and statless componenets

import React, { Component } from 'react';
import Seed from './Seed';



// const Javascriptcomp=React.createClass({
//     render:function() {
//         return(
//             <h3 style={mystyle}>This is plain javascript style declaration of component</h3>
//         );
//     }
// })
// const MyComponent = createReactClass({
//     render() {
//       return(<p>I am a component!</p>);
//     }
//   });

class Wcomponent extends Component{
    render(){
        const mystyle=window.Seed
    return(
         <div style={mystyle}>   
          <h3>This is Es6 style declaration of component</h3>
          <h3>React.createClass for creating class has been depricated and no longer in use</h3>
         </div>   
    );
    }
}










export default Wcomponent;