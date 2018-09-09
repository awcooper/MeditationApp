import React from 'react'
import './index.css';

export default class buttonComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            streak: 0,
            total: 0,
        };
    }

    render(){
        return (
            <div id="button-box">
                <div id="mediate-button" class="option-button">
                    <h1>meditate</h1>
                </div>
                <div id="setting-button" class="option-button">
                    <h1>settings</h1>
                </div>
            </div>
        )
    }

}