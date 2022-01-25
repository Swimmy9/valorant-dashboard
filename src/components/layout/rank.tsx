import React from "react";
import PropTypes from "prop-types";
import { rank } from "../../types";

export default class RankDisplay extends React.Component {
    static props = {
        rank: PropTypes.string,
    };

    render() {
    return (
        <div className="component-display">
            <div><h1></h1></div>
        </div>
    );
}
}