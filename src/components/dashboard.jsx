import React, { Component } from "react";
// https://stackoverflow.com/questions/37629860/automatically-resizing-textarea-in-bootstrap 自動適應大小的 textarea
class Dashboard extends Component {
    state = {};
    render() {
        return (
            <div className="input-group">
                <textarea type="text" className="form-control" rows="1" />
            </div>
        );
    }
}

export default Dashboard;
