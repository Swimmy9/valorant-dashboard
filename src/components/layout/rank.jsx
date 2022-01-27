import React from "react";

export default class RankDisplay extends React.Component {

    render() {
        return (
            <div className="component-display">
                <div>
                    <h1 style={{ color: 'antiqueWhite', paddingTop: '15px' }}>Rank is: {this.props.tier}</h1>
                </div>
            </div>
        );
    }
}