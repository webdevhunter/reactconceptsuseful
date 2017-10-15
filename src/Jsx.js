import React, { Component } from 'react';
import Seed from './Seed';


const purereact=React.createElement('code',null,"<img src='something' />")
const expression=React.createElement('code',null,'this is an expression {2+3} with in curly braces evaluates to ')
const xml=React.createElement('code',null,"<Krishna propname=''></Krishna> Since it is a class it should start with capital letters you can declare react class with 'class Krishna extends React.Component'")

class Krishna extends Component {
  render() {
    return (
      <div >This is a simple component</div>
    );
  }
}
class Jsx extends Component {
  render() {
    const mystyle=window.Seed;
    return (
      <div style={mystyle}>
         
         <h3> you can declare self created tags in Jsx these self tags are used for creating classes pure JSX example.</h3>
         {xml}
         <h3> If you want to write an expression and evaluate in JSX you must declare it in curly braces</h3> 
         {expression}
         {2+3}
         <h3> If there are no children i,e string for any tag you can pretty much close it over there</h3> 
         {purereact}
         <h3>This is pure Jsx and valid html is valid Jsx if it is enclosed in a sin gle div tag</h3>
         <h2>learn createFactory</h2>
        {Krishna}
        <h3>Please take a look at code to know many things like create element using pure react and integrating class as an expression</h3>
      </div>
    );
  }
}

export default Jsx;
