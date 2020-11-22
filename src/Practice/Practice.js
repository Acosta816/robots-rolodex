import React from 'react';
import './Practice.css';



class LightApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightBulbIsOn: false
    }
  }

  toggleLightBulb = () => {
    this.setState((prevState) => {
      return {
        lightBulbIsOn: !prevState.lightBulbIsOn
      }
    },
      () => console.log(`inside setState: ${this.state.lightBulbIsOn}`)
    );

    console.log(`outside setState: ${this.state.lightBulbIsOn}`);
  }




  render() {
    return (
      <>
        <h1>light switch app</h1>
        <div className={`lightBulb ${this.state.lightBulbIsOn ? 'on' : 'off'}`} alt='light bulb' ></div>
        <button onClick={this.toggleLightBulb}><h2>light switch</h2></button>
      </>
    )
  }
};

export default LightApp;



// toggleLightBulb = (e) => {
//   const text = e.target.innerHTML;
//   console.log(e.target.innerHTML);
//   this.setState((prevState) => {
//     return {
//       lightBulbIsOn: !prevState.lightBulbIsOn
//     }
//   })
// }