import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map.view';
import logo from './Zelda_Logo.png'
import Sound from 'react-sound';

/**
 * Class Intro
 */
class Intro extends React.Component {
  
  /**
   * clicked
   * @return {DOM}
   */
  clicked() {
    ReactDOM.render(<Map />, document.getElementById('root'));
  }
  
  /**
   * render
   * @return {DOM}
   */
  render() {
    return(
      <div>
        <div><img alt='' src={logo} style={styles} /></div>
        <div>
          <p style={header} onClick={(e) => {this.clicked("");} }>P R E S S  &nbsp; S T A R T</p>
        </div>
        <Sound
          url="http://tegos.kz/new/mp3_full/Luis_Fonsi_feat._Daddy_Yankee_-_Despacito.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={1 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    </div>
    )
  }
}

const styles = {
  height: "250px",
  width: "500px",
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