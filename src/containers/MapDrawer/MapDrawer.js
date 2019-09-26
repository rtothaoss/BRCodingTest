import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Header from '../../components/Header/Header'


export class MapDrawer extends Component {
    render() {
        return(
            <Jumbotron style={{ minHeight: '100vh', overflow: 'hidden', padding: '0px 0px', margin: '0px auto' }}>
            <Header
                title={"Lunch Tyme"}
                style={styles.header}
                titleStyle={styles.title}
                className='text-center'
            >
            </Header>
            <Jumbotron style={styles.map}><h1 className='text-center'>Map</h1></Jumbotron>
            <Header
                title={this.state.restaurantName}
                style={styles.header}
                titleStyle={styles.title}
                className='text-center'
            >
            </Header>
            <Jumbotron>
                <h4>{this.state.resturantAddress}</h4>
                <h4>{this.state.restaurantPhone}</h4>
                <h4>{this.state.restaurantTwitter}</h4>
            </Jumbotron>
        </Jumbotron>
        )
    }
}

const styles = {
    header: {
        backgroundColor: '#43E895',
        // backgroundColor: 'black',
        display: 'flex',
        width: '100%',
        paddingTop: '45px',
        paddingBottom: '10px'
    },
    title: {
        fontSize: '17px',
        color: '#FFFFFF',
        fontFamily: 'AvenirNextBold',
        margin: '0px auto',
        paddingLeft: '4%'

    },
}

export default MapDrawer