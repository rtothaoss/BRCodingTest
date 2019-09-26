import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Drawer from 'react-motion-drawer'
import axios from 'axios'

export class Restaurants extends Component {

    state = {
        restaurantData: [],
        drawerOpen: false,
        restaurantName: ''
    }

    componentDidMount() {
        this.getRestaurantInfo()
    }

    getRestaurantInfo() {
        axios.get('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then((res) => this.setState({ restaurantData: res.data.restaurants }, () => {
                console.log(this.state.restaurantData)
            }))
            .catch((err) => console.log(err))
    }

    viewRestaurant = (restaurant) => {
        if (!this.state.drawerOpen) {
            this.setState({
                drawerOpen: true,
                restaurantName: restaurant.name
            })
        } else {
            this.setState({
                drawerOpen: false
            })
        }
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    {this.state.restaurantData.map(restaurant => (
                        <div className="col-sm-6">
                            <Jumbotron
                                style={styles.jumbo}
                                backgroundImage={restaurant.backgroundImageURL}
                                onClick={() => this.viewRestaurant(restaurant)}>
                                <h3 style={styles.h3}>{restaurant.name}</h3>
                                <h4 style={styles.h4}>{restaurant.category}</h4>
                            </Jumbotron>
                        </div>
                    ))}
                    <Drawer open={this.state.drawerOpen} width='75%' >
                        {val =>
                            <ul style={{ opacity: 1 }}>
                               <h1>{this.state.restaurantName}</h1>
                            </ul>
                        }
                    </Drawer>
                </div>
            </div>
        )
    }
}
const styles = {
    h3: {
        position: 'relative',
        top: '140px',
        left: '12px',
        fontSize: '16px',
        fontFamily: 'AvenirNextBold',
        color: '#ffffff'
    },
    h4: {
        position: 'relative',
        top: '130px',
        left: '12px',
        fontSize: '12px',
        fontFamily: 'AvenirNextRegular',
        color: '#ffffff'
    },
    jumbo: {
        margin: '0px auto',
        height: '180px',
        width: '100%',
        backgroundSize: 'cover',
        padding: "0px 0px",
        border: "1px solid",
        boxShadow: '2px 5px #888888',
    }
}

export default Restaurants