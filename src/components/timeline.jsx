import React, { Component } from "react";
import Plurk from "./plurk";

class Timeline extends Component {


    getUser(users, owner_id){
        console.log(owner_id);
        // console.log("users " ,users);
        const keys = Object.keys(users);
        console.log(keys);
        const index = keys.indexOf(owner_id.toString());
        const value = Object.values(users)[index];
        console.log('index', index);
        console.log('value', value);
        return value;
    }

    getTop(index){
        return 5.5 + 23.25 * (index % 4);
    }

    getLeft(index){
        return 280 * (index + 1);
    }

    render() {
        //const { plurks } = this.props;
        const {plurk_contents} = this.props;
        console.log(plurk_contents);
        return (
            <div style={{height: '75%', backgroundColor: '#cccccc'}}>
                {              
                plurk_contents.plurks.map((plurk, index) => {
                    return <Plurk plurk={plurk} key={plurk.plurk_id} user={this.getUser(plurk_contents.plurk_users, plurk.owner_id)}
                     top={this.getTop(index)} left={this.getLeft(index)} onMute={this.props.onMute}/>
                })}
            </div>
        );
    }
}

export default Timeline;
