import { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Google Maps React</h1>
        </header>

        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
     
      </InfoWindow>
      </Map>

      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDptiAzDfOsgMuQYlr3TNtYbzOjY3K0KKw")
})(App)
