import React from 'react'
import './index.css';

export default class headerComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            streak: 0,
            total: 0,
        };
    }

    render(){
        return (
            <div id="header-box">
                <div id="streak-container" class="header-card">
                    <h2>streak</h2>
                    <div>
                        {this.state.streak}
                    </div>
                </div>
                <div id="total-container" class="header-card">
                    <h2>total sessions</h2>
                    <div>
                        {this.state.total}
                    </div>
                </div>
                <div class="clear"/>
            </div>
        )
    }

}