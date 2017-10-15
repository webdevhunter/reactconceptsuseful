import React from 'react';
class Counter extends React.Component{
render() {
var textStyle = {
fontSize: 72,
fontFamily: "sans-serif",
color: "#333",
fontWeight: "bold"
};
return (
<div style={textStyle}>
{this.props.display}
</div>
);
}
};


class Events extends React.Component{
constructor(props){
    super(props);
    this.state={count:0};
    this.increase=this.increase.bind(this);
    // this.state={name:'krishna'};
}

increase(e) {
e.preventDefault();
if(e.shiftKey){
    this.setState({count:this.state.count+10});
}else{
    this.setState({count:this.state.count+1})
}

}
render() {
var backgroundStyle = {
padding: 50,
backgroundColor: "#FFC53A",
width: 250,
height: 100,
borderRadius: 10,
textAlign: "center"
};
var buttonStyle = {
fontSize: "1em",
width: 30,
height: 30,
fontFamily: "sans-serif",
color: "#333",
fontWeight: "bold",
lineHeight: "3px"
};
return (
<div style={backgroundStyle}>
<Counter display={this.state.count}/>
<button  onClick={this.increase} style={buttonStyle}>+</button>
</div>
);
}
}

export default Events;
