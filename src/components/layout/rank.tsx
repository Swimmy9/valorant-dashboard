import React from "react";
import PropTypes from "prop-types";
import { rank } from "../../types";

export default class RankDisplay extends React.Component {
    static props = {
        rank: PropTypes.string,
    };

    render(props<rank>) {
    return (
        <div className="component-display">
            <div>{rank.ranks}</div>
        </div>
    );
}
}