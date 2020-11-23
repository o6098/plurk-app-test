import React, { Component } from "react";

class Plurk extends Component {

    render() {
        const {plurk, user} = this.props;
        console.log(plurk);
        return (
            <div>
                <span>
                    <h6>{user.display_name}</h6>
                </span>
                <p>{plurk.content}</p>
            </div>
        );
    }
}

export default Plurk;
