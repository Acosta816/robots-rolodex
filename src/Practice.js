import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'AHHHH!!!'
    }
  }

  changeme = (e) => {
    const text = e.target.innerHTML;
    console.log(e.target.innerHTML);
    this.setState((prevState) => {
      return {
        ...this.state,
        text
      }
    })
  }


  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <button onClick={(e) => this.changeme(e)}>aaaaa...calm</button>
      </>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
