import React, { Component } from 'react';
import WeeklySalesChart from '../common/WeeklySalesChart';
import MostViewedChart from '../common/MostViewedChart';
import AnimatedNumberBox from '../common/AnimatedNumberBox';

class HomePage extends Component {

    render() {
        return(
            <div className="wrapper">
                <div className="row">
                    <h3>Home page</h3>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <WeeklySalesChart />
                    </div>
                    <div className="col-md-6">
                         <MostViewedChart />
                    </div>
                </div>
                
                <div className="row spacing">
                    <div className="col-md-3">
                        <AnimatedNumberBox title="Total Sales" number="72390" />
                    </div>
                    <div className="col-md-3">
                        <AnimatedNumberBox title="Total Site Views" number="18201" />
                    </div>
                    <div className="col-md-3">
                        <AnimatedNumberBox title="New Orders Since Last Week" number="40" />
                    </div>
                    <div className="col-md-3">
                        <AnimatedNumberBox title="Returns Since Last Week" number="7" />
                    </div>

                </div>
            </div>
        ); 
    }

}

export default HomePage;

