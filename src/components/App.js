import React  from 'react'
import '../styles/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "John Doe", 
            enrollmentNo: "12345678", 
            age: 34
        }
    }
    handleClick = () => {
        this.setState((prevState => ({
            age:prevState.age+1
        })));
    }
  render(){  
    return (
        <>
            <h1>Hello, my name is {this.state.name}</h1>
            <p>I am {this.state.age} years old 
            and my enrollment no is {this.state.enrollmentNo}</p>
            <button type="button" onClick={this.handleClick}>+</button>
        </>
    )
  }
}


export default App;
