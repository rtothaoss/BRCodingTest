import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import MapDrawer from '../MapDrawer/MapDrawer'
import Spinner from '../../components/Spinner/Spinner'
import Drawer from 'react-motion-drawer'



export class Restaurants extends Component {

    state = {
        drawerOpen: false,
        restaurantName: '',
        restaurantCat: '',
        restaurantPhone: '',
        restaurantTwitter: 'twit',
        resturantAddress: '',
        restaurantCity: '',
        restaurantZip: '',
        restaurantState: '',
        restaurantLat: '',
        restaurantLong: '',
        width: ''

    }

    componentDidMount() {
        this.deviceUsed()
        this.props.initRestData()
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    deviceUsed() {
        this.setState({
            width: window.innerWidth
        })
        window.addEventListener('resize', this.handleWindowSizeChange)
    }


    render() {

        const { drawerOpen, width } = this.state
        const isntMobile = width >= 500;

        let show;

        if (this.props.restData) {
            show = (
                this.props.restData.map(restaurant => (
                    <div className="col-sm-6" style={isntMobile ? { padding: '15px 15px', overflow: 'hidden' } : { padding: '0px 0px', overflow: 'hidden' }} key={restaurant.name}>
                        <Jumbotron
                            style={styles.jumbo}
                            backgroundImage={restaurant.backgroundImageURL}
                            onClick={() => this.setState({
                                drawerOpen: !drawerOpen,
                                restaurantName: restaurant.name,
                                restaurantCat: restaurant.category,
                                restaurantPhone: (restaurant.contact === null) ? '' : restaurant.contact.formattedPhone,
                                restaurantTwitter: (restaurant.contact === null) ? '' : `@${restaurant.contact.twitter}`,
                                restaurantAddress: restaurant.location.address,
                                restaurantCity: restaurant.location.city,
                                restaurantState: restaurant.location.state,
                                restaurantZip: (restaurant.location.postalCode === undefined) ? '' : restaurant.location.postalCode,
                                restaurantLat: restaurant.location.lat,
                                restaurantLong: restaurant.location.lng
                            })}
                        >
                            <h3 style={styles.h3}>{restaurant.name}</h3>
                            <h4 style={styles.h4}>{restaurant.category}</h4>
                        </Jumbotron>
                    </div>
                ))
            )
        } else {
            show = <Spinner />
        }

        return (

            <div className="container">
                <div className="row">
                    {show}
                    <Drawer
                        open={drawerOpen}
                        width='75%'
                        noTouchOpen={false}
                        noTouchClose={false}
                        onChange={open => this.setState({ drawerOpen: open })} >
                        <MapDrawer 
                            restaurantName={this.state.restaurantName}
                            restaurantCat={this.state.restaurantCat}
                            restaurantLat={this.state.restaurantLat}
                            restaurantLong={this.state.restaurantLong}
                            restaurantAddress={this.state.restaurantAddress}
                            restaurantCity={this.state.restaurantCity}
                            restaurantState={this.state.restaurantState}
                            restaurantZip={this.state.restaurantZip}
                            restaurantPhone={this.state.restaurantPhone}
                            restaurantTwitter={this.state.restaurantTwitter}
                        />
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
    },
    header: {
        backgroundColor: '#43E895',
        display: 'flex',
        width: '100%',
        paddingTop: '25px',
        paddingBottom: '10px',
        height: '60px'
    },
    header1: {
        backgroundColor: '#34b379',
        width: '100%',
        paddingTop: '10px',
        height: '60px',
    },
    header2: {
        backgroundColor: '#43E895',
        display: 'flex',
        width: '100%',
        paddingTop: '25px',
        paddingBottom: '10px',
        height: '60px',
    },
    title: {
        fontSize: '17px',
        color: '#FFFFFF',
        fontFamily: 'AvenirNextBold',
        margin: '0px auto',
        paddingLeft: '4%'

    },
    map: {
        marginBottom: '0px',
        height: '180px',
        position: 'relative'
    }
}

const mapStateToProps = state => {
    return {
        restData: state.restData.restaurantData.restaurants,
        tester: state.tester
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initRestData: () => dispatch(actions.initRestaurantData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)