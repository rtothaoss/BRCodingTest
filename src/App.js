import React, { Component } from 'react';
import Restaurants from './containers/Restaurants/Restaurants'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import MapButton from './assets/images/icon_map@2x.png'

export class App extends Component {

  state = {
    needBackButton: false
  }

  render() {

    // let backBtn = (
    //   <Button 
    //   alt={'Map'}
    //   src={MapButton}
    //   style={styles.mapButton}
    // />)

    // if(needBackButton) {

    // }


 
    return (
      <div>
        <Header
          title={"Lunch Tyme"}
          style={styles.header}
          titleStyle={styles.title}
          className='text-center'
        >
        <Button 
          alt={'Map'}
          src={MapButton}
          style={styles.mapButton}
        />

        </Header>
        <Restaurants />
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#43E895',
    display: 'flex',
    width: '100%',
    paddingTop: '25px',
    height: '60px'
  },
  title: {
    fontSize: '17px',
    color: '#FFFFFF',
    fontFamily: 'AvenirNextBold',
    margin: '0px auto',
    paddingLeft: '4%',
    // marginLeft: '47.5%'
    
  },
  mapButton: {
    height: '35px',
    width: '35px',
    marginRight: '2%',
    paddingBottom: '5px',
  }
}


export default App;
