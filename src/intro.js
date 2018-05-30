import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './map.view';
import logo from './Zelda_Logo.png'


class Intro extends React.Component {
  
  clicked() {
    ReactDOM.render(<Map />, document.getElementById('root'));
  }
  
  render() {
    return(
      <div>
        <div><img src={logo} style={styles} /></div>
        <div>
          <p style={header} onClick={(e) => {this.clicked("");} }>P R E S S  &nbsp; S T A R T</p>
        </div>
    </div>
    )
  }
}

const styles = {
  height: "250px",
  width: "500px",
  alignItems: 'center',
}

const btnStyles = {
  width: '100%',
  alignItems: 'center',
}

const header = {
  color: 'yellow',
  fontSize: 60,
  borderColor: '#fff',
  borderWidth: 2,
  padding: 20,
  paddingLeft: 40,
  paddingRight: 40,
  backgroundColor: 'rgba(255,255,255, .2)',
  marginTop: 50,
  alignItems: 'center',
}

export default Intro
