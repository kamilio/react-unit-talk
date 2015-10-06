import React, { Component } from 'react';

import { getState, setState } from '../state';

require('../../node_modules/grid-css/grid.css');

// Smart component
export default class Homepage extends Component {
    state = getState();

    handleEvent(name) {
    }

    render() {
        const { user, events } = this.state;

        return (
            <div className="grid grid-small-full grid-wrap">
                <div className="users cell">
                    Users here
                </div>
                <div className="history cell">
                    History here
                </div>

                <div className="current cell">
                    Current here
                </div>
            </div>
        );
    }
}